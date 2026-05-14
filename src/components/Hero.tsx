"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

const categories = [
  { name: "B2B", dot: "bg-orange-500" },
  { name: "B2C", dot: "bg-emerald-500" },
  { name: "Creators", dot: "bg-violet-500" },
] as const;

type Category = (typeof categories)[number]["name"];

const stages = ["Acquire", "Activate", "Engage", "Advocate"] as const;
type Stage = (typeof stages)[number];

const stageDescriptions: Record<Stage, string> = {
  Acquire:
    "Build awareness and get more users by incentivizing referrals, shoutouts and user-generated content.",
  Activate:
    "Cut drop-offs and accelerate time-to-value by incentivizing onboarding steps and value-driving actions.",
  Engage:
    "Drive deeper engagement by incentivizing feedback and participation beyond core usage.",
  Advocate:
    "Build trust and social proof by incentivizing testimonials, reviews,\nand endorsements.",
};

type Reward = {
  icon?: string;
  brand?: "g2" | "ph";
  action: string;
  reward: string;
};

const data: Record<Category, Record<Stage, Reward[]>> = {
  B2B: {
    Acquire: [
      { icon: "UserMultiple02IconDual", action: "Refer a Business", reward: "$100 Credits for each" },
      { icon: "Linkedin01IconDual", action: "Share Results on LinkedIn", reward: "500 AI Credits" },
      { icon: "ZoomIconDual", action: "Co-host a Webinar", reward: "3 Months Free Pro Plan" },
      { icon: "Share07IconDual", action: "Join Partner Program", reward: "30% Recurring Commission" },
    ],
    Activate: [
      { icon: "CheckListIconDual", action: "Complete Onboarding", reward: "100 AI Credits" },
      { icon: "ConnectIconDual", action: "Connect Your CRM", reward: "Unlock Automation Suite" },
      { icon: "FlowConnectionIconDual", action: "Set-up Your First Workflow", reward: "100 AI Credits" },
      { icon: "AddTeamIconDual", action: "Invite 3 Team Members", reward: "20% off on Next Renewal" },
    ],
    Engage: [
      { icon: "Comment01IconDual", action: "Submit a Feature Request", reward: "100 AI Credits" },
      { icon: "ComputerVideoCallIconDual", action: "Join a 15-min UX Interview", reward: "$50 Amazon Giftcard" },
      { icon: "SlackIconDual", action: "Join Customer Slack", reward: "300 Reward Points" },
      { icon: "ZoomIconDual", action: "Attend Product Webinar", reward: "Unlock Insider Access" },
    ],
    Advocate: [
      { brand: "g2", action: "Review us on G2", reward: "$25 Starbucks Giftcard" },
      { icon: "RedditIconDual", action: "Recommend on Reddit", reward: "250 Reward Points" },
      { brand: "ph", action: "Upvote on Product Hunt", reward: "50 AI Credits" },
      { icon: "NewTwitterRectangleIconDual", action: "Write a Testimonial", reward: "$100 off Invoice" },
    ],
  },
  B2C: {
    Acquire: [
      { icon: "UserMultiple02IconDual", action: "Invite 3 Friends", reward: "$10 Credits for each" },
      { icon: "TiktokIconDual", action: "Share Your Win on TikTok", reward: "500 AI Credits" },
      { icon: "WhatsappIconDual", action: "Gift Trial in WhatsApp Group", reward: "3 Months Free Pro Plan" },
      { icon: "InstagramIconDual", action: "Repost as Instagram Story", reward: "100 Reward Points" },
    ],
    Activate: [
      { icon: "UserListIconDual", action: "Complete User Profile", reward: "50 Welcome Credits" },
      { icon: "CheckmarkCircle02IconDual", action: "Complete First Task", reward: "7-Day Premium Unlock" },
      { icon: "CalendarFoldIconDual", action: "Reach 7-Day Streak", reward: "Get a Paid Add-on" },
      { icon: "NotificationSquareIconDual", action: "Enable Notifications", reward: "100 AI Credits" },
    ],
    Engage: [
      { icon: "Diamond02IconDual", action: "Try Premium Trial", reward: "50% Off Upgrade for 3 Months" },
      { icon: "Task01IconDual", action: "Complete Feedback Survey", reward: "100 Reward Points" },
      { icon: "UserGroup03IconDual", action: "Join Community Challenge", reward: "Unlock Exclusive Perks" },
      { icon: "DashboardSpeed01IconDual", action: "Achieve Usage Milestone", reward: "Earn \"Champion\" Badge" },
    ],
    Advocate: [
      { icon: "AppStoreIconDual", action: "Review on App Store", reward: "100 AI Credits" },
      { icon: "RedditIconDual", action: "Recommend on Reddit", reward: "250 Reward Points" },
      { icon: "Video02IconDual", action: "Record Video Testimonial", reward: "$50 Amazon Gift Card" },
      { icon: "SpotlightIconDual", action: "Get Featured in Spotlight", reward: "25% Discount — Forever" },
    ],
  },
  Creators: {
    Acquire: [
      { icon: "UserMultiple02IconDual", action: "Refer 3 Colleagues", reward: "Each Gets 1 Month Free" },
      { icon: "Share07IconDual", action: "Share Resource with Team", reward: "50% Off Next Workshop" },
      { icon: "Linkedin01IconDual", action: "Post a Snippet on LinkedIn", reward: "100 Wallet Points" },
      { icon: "NewTwitterIconDual", action: "Repost with Caption", reward: "Unlock Swipe File Library" },
    ],
    Activate: [
      { icon: "UserListIconDual", action: "Complete Your Profile", reward: "Unlock Starter Resource Pack" },
      { icon: "Upload03IconDual", action: "Follow Our Socials", reward: "Access to Partner Perks" },
      { icon: "RepeatIconDual", action: "Maintain 3-Day Streak", reward: "30% Off Annual Upgrade" },
      { icon: "SlackIconDual", action: "Introduce Yourself in Community", reward: "Unlock Member Directory" },
    ],
    Engage: [
      { icon: "AiIdeaIconDual", action: "Submit a Topic Idea", reward: "Co-create Content With Us" },
      { icon: "Task01IconDual", action: "Complete a Survey", reward: "$10 Amazon Gift Card" },
      { icon: "SlackIconDual", action: "Become Top Supporter", reward: "Free Seat at Live Cohort" },
      { icon: "ZoomIconDual", action: "Attend Live AMA", reward: "50% Off Mentor Session" },
    ],
    Advocate: [
      { icon: "StarSquareIconDual", action: "Write Public Testimonial", reward: "$50 Amazon Gift Card" },
      { icon: "RedditIconDual", action: "Recommend on Reddit", reward: "200 Wallet Points" },
      { icon: "NewTwitterIconDual", action: "Share Your Stack on X", reward: "Unlock Pro Content Vault" },
      { icon: "SpotlightIconDual", action: "Get Featured in Spotlight", reward: "Free Merchandise" },
    ],
  },
};

function RewardIcon({ reward }: { reward: Reward }) {
  if (reward.brand === "ph") {
    return (
      <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="#89CCE9" />
        <mask id="ph-mask" maskUnits="userSpaceOnUse" x="31" y="21" width="46" height="61" fill="black">
          <rect fill="white" x="31" y="21" width="46" height="61" />
          <path d="M32.7386 81V22.8182H54.5568C59.0265 22.8182 62.7765 23.6515 65.8068 25.3182C68.8561 26.9848 71.1572 29.2765 72.7102 32.1932C74.2822 35.0909 75.0682 38.3864 75.0682 42.0795C75.0682 45.8106 74.2822 49.125 72.7102 52.0227C71.1383 54.9205 68.8182 57.2027 65.75 58.8693C62.6818 60.517 58.9034 61.3409 54.4148 61.3409H39.9545V52.6761H52.9943C55.608 52.6761 57.7481 52.2216 59.4148 51.3125C61.0814 50.4034 62.3125 49.1534 63.108 47.5625C63.9223 45.9716 64.3295 44.1439 64.3295 42.0795C64.3295 40.0152 63.9223 38.197 63.108 36.625C62.3125 35.053 61.072 33.8314 59.3864 32.9602C57.7197 32.0701 55.5701 31.625 52.9375 31.625H43.2784V81H32.7386Z" />
        </mask>
        <path d="M32.7386 81V22.8182H54.5568C59.0265 22.8182 62.7765 23.6515 65.8068 25.3182C68.8561 26.9848 71.1572 29.2765 72.7102 32.1932C74.2822 35.0909 75.0682 38.3864 75.0682 42.0795C75.0682 45.8106 74.2822 49.125 72.7102 52.0227C71.1383 54.9205 68.8182 57.2027 65.75 58.8693C62.6818 60.517 58.9034 61.3409 54.4148 61.3409H39.9545V52.6761H52.9943C55.608 52.6761 57.7481 52.2216 59.4148 51.3125C61.0814 50.4034 62.3125 49.1534 63.108 47.5625C63.9223 45.9716 64.3295 44.1439 64.3295 42.0795C64.3295 40.0152 63.9223 38.197 63.108 36.625C62.3125 35.053 61.072 33.8314 59.3864 32.9602C57.7197 32.0701 55.5701 31.625 52.9375 31.625H43.2784V81H32.7386Z" fill="#0093D2" />
        <path d="M32.7386 81H31.7386V82H32.7386V81ZM32.7386 22.8182V21.8182H31.7386V22.8182H32.7386ZM65.8068 25.3182L65.3249 26.1944L65.3272 26.1957L65.8068 25.3182ZM72.7102 32.1932L71.8275 32.6632L71.8312 32.67L72.7102 32.1932ZM72.7102 52.0227L73.5892 52.4996V52.4996L72.7102 52.0227ZM65.75 58.8693L66.2231 59.7503L66.2273 59.748L65.75 58.8693ZM39.9545 61.3409H38.9545V62.3409H39.9545V61.3409ZM39.9545 52.6761V51.6761H38.9545V52.6761H39.9545ZM59.4148 51.3125L59.8936 52.1904V52.1904L59.4148 51.3125ZM63.108 47.5625L62.2178 47.1068L62.2135 47.1153L63.108 47.5625ZM63.108 36.625L62.2156 37.0765L62.22 37.085L63.108 36.625ZM59.3864 32.9602L58.9152 33.8424L58.9272 33.8486L59.3864 32.9602ZM43.2784 31.625V30.625H42.2784V31.625H43.2784ZM43.2784 81V82H44.2784V81H43.2784ZM32.7386 81H33.7386V22.8182H32.7386H31.7386V81H32.7386ZM32.7386 22.8182V23.8182H54.5568V22.8182V21.8182H32.7386V22.8182ZM54.5568 22.8182V23.8182C58.906 23.8182 62.4792 24.6293 65.3249 26.1944L65.8068 25.3182L66.2887 24.442C63.0738 22.6738 59.1471 21.8182 54.5568 21.8182V22.8182ZM65.8068 25.3182L65.3272 26.1957C68.2145 27.7738 70.3711 29.9279 71.8276 32.6632L72.7102 32.1932L73.5929 31.7232C71.9433 28.6251 69.4976 26.1959 66.2864 24.4407L65.8068 25.3182ZM72.7102 32.1932L71.8312 32.67C73.3146 35.4044 74.0682 38.5325 74.0682 42.0795H75.0682H76.0682C76.0682 38.2402 75.2498 34.7774 73.5892 31.7163L72.7102 32.1932ZM75.0682 42.0795H74.0682C74.0682 45.6663 73.3138 48.8129 71.8312 51.5459L72.7102 52.0227L73.5892 52.4996C75.2506 49.4371 76.0682 45.9549 76.0682 42.0795H75.0682ZM72.7102 52.0227L71.8312 51.5459C70.357 54.2634 68.1815 56.4105 65.2727 57.9906L65.75 58.8693L66.2273 59.748C69.4549 57.9948 71.9195 55.5775 73.5892 52.4996L72.7102 52.0227ZM65.75 58.8693L65.2769 57.9883C62.3902 59.5386 58.7847 60.3409 54.4148 60.3409V61.3409V62.3409C59.0222 62.3409 62.9735 61.4955 66.2231 59.7503L65.75 58.8693ZM54.4148 61.3409V60.3409H39.9545V61.3409V62.3409H54.4148V61.3409ZM39.9545 61.3409H40.9545V52.6761H39.9545H38.9545V61.3409H39.9545ZM39.9545 52.6761V53.6761H52.9943V52.6761V51.6761H39.9545V52.6761ZM52.9943 52.6761V53.6761C55.7153 53.6761 58.0352 53.2041 59.8936 52.1904L59.4148 51.3125L58.9359 50.4346C57.4611 51.2391 55.5006 51.6761 52.9943 51.6761V52.6761ZM59.4148 51.3125L59.8936 52.1904C61.7268 51.1905 63.1093 49.7958 64.0024 48.0097L63.108 47.5625L62.2135 47.1153C61.5157 48.511 60.4361 49.6163 58.9359 50.4346L59.4148 51.3125ZM63.108 47.5625L63.9981 48.0182C64.8951 46.2658 65.3295 44.2777 65.3295 42.0795H64.3295H63.3295C63.3295 44.0101 62.9496 45.6774 62.2178 47.1068L63.108 47.5625ZM64.3295 42.0795H65.3295C65.3295 39.8817 64.8952 37.901 63.9959 36.165L63.108 36.625L62.22 37.085C62.9495 38.4929 63.3295 40.1486 63.3295 42.0795H64.3295ZM63.108 36.625L64.0002 36.1735C63.1024 34.3993 61.7026 33.0317 59.8455 32.0719L59.3864 32.9602L58.9272 33.8486C60.4413 34.6312 61.5226 35.7068 62.2157 37.0765L63.108 36.625ZM59.3864 32.9602L59.8575 32.0781C58.0001 31.0862 55.6733 30.625 52.9375 30.625V31.625V32.625C55.4669 32.625 57.4393 33.054 58.9153 33.8423L59.3864 32.9602ZM52.9375 31.625V30.625H43.2784V31.625V32.625H52.9375V31.625ZM43.2784 31.625H42.2784V81H43.2784H44.2784V31.625H43.2784ZM43.2784 81V80H32.7386V81V82H43.2784V81Z" fill="white" fillOpacity="0.2" mask="url(#ph-mask)" />
      </svg>
    );
  }
  if (reward.brand === "g2") {
    return (
      <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="#89CCE9" />
        <path d="M62.6892 63.1718C65.0339 67.1294 67.3525 71.0421 69.6694 74.9506C59.41 82.5904 43.4483 83.5136 31.6321 74.7158C18.0343 64.5834 15.7994 47.2945 23.0795 34.8493C31.4526 20.5346 47.1214 17.3688 57.21 19.6902C56.9371 20.2667 50.8948 32.4593 50.8948 32.4593C50.8948 32.4593 50.4172 32.4898 50.1469 32.4949C47.165 32.6178 44.944 33.2927 42.5636 34.4898C39.9518 35.8154 37.7137 37.743 36.0447 40.1042C34.3757 42.4653 33.3266 45.1882 32.9893 48.0347C32.6373 50.9215 33.0477 53.8479 34.1817 56.5375C35.1405 58.8114 36.4968 60.8309 38.3151 62.5359C41.1044 65.154 44.4237 66.775 48.2711 67.3117C51.9147 67.8204 55.4187 67.3168 58.7022 65.7119C59.9339 65.1107 60.9816 64.4469 62.2063 63.5363C62.3623 63.438 62.5009 63.3134 62.6892 63.1718Z" fill="#0093D2" />
        <path d="M22.6475 34.5967C31.1531 20.0554 47.0667 16.8433 57.3223 19.2031L57.9277 19.3428L57.6621 19.9043C57.5229 20.1985 55.9407 23.3973 54.3984 26.5127C53.6261 28.0729 52.8618 29.6155 52.291 30.7676C52.0057 31.3434 51.7683 31.8218 51.6025 32.1562C51.5198 32.3232 51.4554 32.4545 51.4111 32.5439C51.389 32.5887 51.3718 32.6234 51.3604 32.6465C51.3546 32.658 51.3506 32.667 51.3477 32.6729C51.3463 32.6756 51.3445 32.6773 51.3438 32.6787L51.3428 32.6807L51.2148 32.9395L50.9268 32.958H50.9248C50.9238 32.9581 50.9226 32.9589 50.9209 32.959C50.9172 32.9592 50.9113 32.9595 50.9043 32.96C50.8904 32.9608 50.8703 32.9614 50.8457 32.9629C50.796 32.9659 50.727 32.9704 50.6494 32.9746C50.4958 32.9829 50.3009 32.9924 50.1562 32.9951L50.1553 32.9941C47.2587 33.1151 45.1095 33.7691 42.7881 34.9365C40.2488 36.2257 38.0741 38.0994 36.4531 40.3926C34.8318 42.6863 33.8128 45.3307 33.4854 48.0938V48.0947C33.144 50.8946 33.5423 53.7342 34.6426 56.3438C35.5763 58.558 36.894 60.5176 38.6572 62.1709L39.1729 62.6377C41.7781 64.9125 44.8309 66.3269 48.3398 66.8164C51.8903 67.3121 55.2935 66.8213 58.4824 65.2627H58.4834C59.6809 64.6782 60.7021 64.0315 61.9082 63.1348L61.9395 63.1133C62.0755 63.0275 62.1519 62.9505 62.3887 62.7725L62.835 62.4365L63.1191 62.917C65.4638 66.8746 67.7828 70.7869 70.0996 74.6953L70.3291 75.083L69.9678 75.3516C59.5399 83.1167 43.3357 84.0529 31.334 75.1172L31.333 75.1162C17.5215 64.8242 15.2453 47.2507 22.6475 34.5967Z" stroke="white" strokeOpacity="0.2" />
        <path d="M62.7118 28.4627C62.1164 27.8929 61.5647 27.3673 61.0155 26.8382C60.6878 26.5228 60.3723 26.1947 60.0367 25.887C59.9164 25.7759 59.7752 25.6241 59.7752 25.6241C59.7752 25.6241 59.8894 25.3884 59.9382 25.2918C60.5806 24.0379 61.5874 23.1214 62.7815 22.3922C64.102 21.5798 65.6405 21.1665 67.2025 21.2044C69.2013 21.2426 71.0596 21.7267 72.6277 23.0306C73.7853 23.9929 74.3789 25.2138 74.4835 26.6712C74.6578 29.1299 73.6118 31.0129 71.5347 32.327C70.3144 33.1003 68.9982 33.698 67.6785 34.4059C66.9506 34.7968 66.3283 35.1401 65.617 35.8472C64.9912 36.5568 64.9607 37.2258 64.9607 37.2258L74.4155 37.2139V41.3098H59.8214V40.9138C59.7656 38.9011 60.007 37.007 60.9545 35.1791C61.8262 33.5021 63.1807 32.2745 64.8081 31.3292C66.0616 30.6009 67.3812 29.9811 68.6373 29.2562C69.4122 28.8094 69.9596 28.154 69.9552 27.2036C69.9552 26.388 69.3451 25.6631 68.4734 25.4368C66.4181 24.8976 64.3261 25.7581 63.2383 27.5877C63.0796 27.8548 62.9175 28.1201 62.7118 28.4627ZM81 58.8182L73.0322 45.4344H57.2648L49.2456 58.9564H65.1289L72.9668 72.2766L81 58.8182Z" fill="#0093D2" />
        <path d="M73.3159 44.9344L73.4614 45.1786L81.4292 58.5624L81.5825 58.8182L81.4292 59.0741L73.396 72.5331L72.9634 73.2577L72.5356 72.5302L64.8423 59.4559H48.3677L48.8159 58.701L56.8345 45.1796L56.98 44.9344H73.3159ZM67.2144 20.705L67.2134 20.7059C69.2879 20.7457 71.2679 21.2495 72.9478 22.6464C74.214 23.6992 74.868 25.0482 74.9819 26.6356L74.9956 26.8827C75.091 29.2565 74.0951 31.1323 72.2056 32.4784L71.8022 32.7499C70.5633 33.5349 69.1936 34.1604 67.9146 34.8466C67.1976 35.2315 66.6318 35.5457 65.979 36.1923C65.8147 36.3813 65.7044 36.5653 65.6274 36.7245L74.4146 36.7137H74.9155V41.8094H59.3218V40.9276L59.3149 40.5419C59.2986 38.6174 59.5728 36.7577 60.5103 34.9491L60.5112 34.9481C61.4375 33.1663 62.8709 31.8759 64.5571 30.8964C65.1948 30.5259 65.8477 30.1843 66.4897 29.8485C67.1352 29.511 67.7698 29.1794 68.3872 28.8231L68.6284 28.6708C69.1575 28.3009 69.4584 27.8293 69.4556 27.2059V27.204C69.4556 26.6491 69.0326 26.0987 68.3481 25.9208H68.3462C66.5074 25.4385 64.6427 26.205 63.6685 27.8436L63.6675 27.8427C63.5085 28.1104 63.3429 28.382 63.1401 28.7196L62.8179 29.2567L62.3657 28.8241C61.7715 28.2554 61.2184 27.7279 60.6685 27.1981C60.3188 26.8616 60.0319 26.5613 59.6987 26.2557L59.6978 26.2548C59.6279 26.1902 59.5551 26.1166 59.5024 26.0624C59.4755 26.0347 59.4523 26.0102 59.436 25.993C59.428 25.9845 59.4211 25.9774 59.4165 25.9725L59.4097 25.9657V25.9647L59.1763 25.7137L59.3257 25.4061V25.4052L59.3306 25.3954C59.3338 25.3887 59.3385 25.3788 59.3442 25.3671C59.3558 25.3433 59.3718 25.3109 59.3892 25.2753C59.4236 25.2047 59.4655 25.1182 59.4917 25.0663L59.4937 25.0634C60.1903 23.7039 61.2749 22.7265 62.521 21.9657C63.9241 21.1029 65.5572 20.6648 67.2144 20.705Z" stroke="white" strokeOpacity="0.2" />
      </svg>
    );
  }
  if (reward.icon === "RedditIconDual") {
    return (
      <svg className="h-8 w-8" viewBox="0 0 175 174" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90.0448 0.0362959C90.4016 0.0444981 90.4016 0.0444981 90.7655 0.0528661C97.9549 0.238378 105.103 1.26614 112.017 3.26396C112.821 3.46265 113.562 3.4967 114.387 3.42987C114.387 3.61652 114.387 3.80317 114.387 3.99547C114.714 4.10228 115.04 4.20909 115.377 4.31914C118.249 5.28011 121.043 6.36337 123.816 7.58347C124.264 7.77995 124.264 7.77995 124.72 7.98039C126.235 8.65561 127.676 9.37978 129.105 10.217C129.482 10.3138 129.86 10.4086 130.238 10.4998C130.617 10.7799 130.994 11.0631 131.37 11.3482C131.774 11.6027 132.181 11.8518 132.592 12.0961C137.578 15.0998 142.169 18.4124 146.512 22.2883C147.109 22.81 147.731 23.2988 148.353 23.7913C149.465 24.8427 150.469 25.9827 151.476 27.133C151.838 27.5347 152.211 27.927 152.595 28.3073C153.729 29.4515 154.706 30.7361 155.712 31.9925C155.938 32.2735 156.164 32.5546 156.398 32.8442C170.34 50.5227 176.911 74.2137 174.289 96.5256C173.146 105.713 170.599 114.751 166.468 123.053C166.34 123.313 166.213 123.573 166.081 123.84C164.204 127.633 162.131 131.202 159.675 134.648C159.539 134.839 159.404 135.03 159.264 135.227C156.847 138.62 154.242 141.796 151.394 144.837C150.77 145.506 150.174 146.192 149.591 146.897C149.369 147.148 149.147 147.398 148.919 147.657C148.732 147.657 148.545 147.657 148.353 147.657C148.353 147.844 148.353 148.03 148.353 148.222C147.977 148.601 147.977 148.601 147.433 149.053C146.568 149.785 145.727 150.534 144.9 151.31C143.401 152.713 141.853 154.003 140.198 155.219C139.448 155.775 138.971 156.202 138.446 156.989C138.248 157.065 138.049 157.141 137.845 157.219C137.104 157.525 136.661 157.811 136.04 158.297C122.664 168.608 104.718 173.328 88.1093 173.831C87.9143 173.837 87.7194 173.843 87.5185 173.849C81.208 174.034 74.8935 173.998 68.5809 173.995C66.7752 173.994 64.9695 173.995 63.1638 173.995C59.949 173.996 56.7341 173.995 53.5193 173.994C50.6116 173.992 47.704 173.993 44.7963 173.994C41.3969 173.995 37.9975 173.996 34.5981 173.995C32.8066 173.995 31.015 173.995 29.2234 173.996C27.5446 173.996 25.8657 173.996 24.1868 173.994C23.5728 173.994 22.9589 173.994 22.3449 173.995C13.6734 174.003 13.6734 174.003 11.6405 172.26C10.7741 171.34 10.7282 170.529 10.6852 169.309C10.7585 167.032 11.7963 165.642 13.3388 164.059C13.8984 163.559 14.4688 163.074 15.0404 162.588C15.7638 161.935 16.3732 161.214 17.0019 160.471C17.882 159.483 18.8275 158.563 19.7746 157.64C20.6235 156.806 21.3729 155.939 22.1133 155.01C22.7144 154.39 23.3289 153.788 23.9502 153.189C24.3947 152.76 24.8373 152.33 25.2799 151.899C25.4308 151.755 25.5817 151.612 25.7371 151.464C26.6024 150.615 27.0834 149.919 27.4912 148.788C27.3331 148.633 27.1749 148.478 27.012 148.318C21.4796 142.881 21.4796 142.881 19.2828 140.021C19.0226 139.704 18.7612 139.387 18.4989 139.071C15.3771 135.292 12.7292 131.256 10.3601 126.968C10.239 126.751 10.1179 126.535 9.9931 126.312C9.88724 126.12 9.78139 125.927 9.67232 125.728C9.57458 125.592 9.47684 125.456 9.37614 125.316C9.18933 125.316 9.00252 125.316 8.81005 125.316C8.73817 124.991 8.66629 124.666 8.59223 124.332C8.26981 123.046 7.76308 121.899 7.20021 120.703C2.58299 110.575 2.58299 110.575 2.58299 106.651C2.30277 106.651 2.02255 106.651 1.73384 106.651C1.79222 106.47 1.8506 106.29 1.91075 106.103C2.07654 104.75 1.7796 103.349 1.16775 102.126C0.925933 100.531 0.76859 98.9239 0.601652 97.3188C0.57488 97.0683 0.548108 96.8178 0.520524 96.5596C-1.18726 80.1805 1.26294 63.5247 8.527 48.6776C8.71472 48.284 8.90231 47.8903 9.08978 47.4967C11.2111 43.098 13.7529 39.0243 16.6259 35.0794C16.9944 34.5709 17.3569 34.0588 17.7172 33.5445C18.0193 33.1175 18.0193 33.1175 18.3275 32.6818C18.5005 32.4365 18.6734 32.1911 18.8516 31.9383C18.9939 31.7696 19.1362 31.6008 19.2828 31.4269C19.4696 31.4269 19.6564 31.4269 19.8489 31.4269C19.9168 31.269 19.9847 31.1112 20.0546 30.9486C20.4934 30.1537 21.0357 29.5647 21.6534 28.8994C22.3136 28.1856 22.9545 27.4777 23.5584 26.7154C24.2183 25.9011 24.9815 25.3015 25.7929 24.6397C26.2666 24.1704 26.7382 23.6988 27.2082 23.2257C29.5241 20.9827 31.9715 19.0162 34.5797 17.1246C35.0945 16.7498 35.6048 16.3698 36.1142 15.9879C43.3953 10.5852 51.7309 6.75104 60.3248 3.99547C60.3248 3.80882 60.3248 3.62217 60.3248 3.42987C60.5703 3.4134 60.5703 3.4134 60.8208 3.39659C62.8229 3.23276 64.7106 2.8134 66.658 2.33403C74.3428 0.516385 82.1486 -0.173345 90.0448 0.0362959ZM110.204 26.4083C108.388 28.6504 106.521 31.5515 106.745 34.5377C107.025 34.3977 107.025 34.3977 107.311 34.2549C107.909 34.3037 108.504 34.3784 109.098 34.467C109.578 34.5348 109.578 34.5348 110.067 34.6039C111.008 34.8245 111.625 35.1069 112.406 35.6688C112.942 36.5455 112.973 37.0567 112.936 38.0903C112.65 39.2138 112.459 39.4859 111.557 40.1936C110.749 40.5236 109.923 40.7493 109.08 40.9713C108.855 41.0336 108.631 41.096 108.4 41.1602C107.849 41.3127 107.297 41.4606 106.745 41.6076C107.436 43.6612 108.325 45.4202 109.858 46.9808C110.138 47.0741 110.419 47.1674 110.707 47.2636C110.902 47.6376 111.09 48.0151 111.273 48.3948C113.963 51.0889 117.986 52.1076 121.675 52.1595C125.986 52.1394 129.556 50.9199 132.694 47.9363C135.592 44.9681 137.248 41.4745 137.333 37.2883C137.193 33.5162 136.096 30.0787 133.634 27.1849C133.451 26.9676 133.269 26.7504 133.08 26.5265C130.26 23.4529 126.663 21.7998 122.526 21.4516C117.75 21.3027 113.491 22.9001 110.204 26.4083ZM78.3868 60.3606C78.1948 60.3795 78.0028 60.3983 77.805 60.4177C74.5712 60.7383 71.406 61.1746 68.2501 61.9691C67.9115 62.054 67.573 62.1389 67.2241 62.2265C64.8896 62.8318 62.6074 63.5306 60.3602 64.4082C60.009 64.5447 60.009 64.5447 59.6508 64.6839C58.3607 65.2112 57.1911 65.8098 56.0172 66.5623C53.1124 68.4146 53.1124 68.4146 51.8334 68.7562C50.3871 68.4284 49.4922 67.7529 48.3508 66.8426C47.5525 66.2627 46.6821 65.9105 45.7655 65.5571C45.5898 65.4887 45.4141 65.4203 45.233 65.3499C40.4633 63.5772 35.0001 63.2239 30.2576 65.2875C28.1117 66.2964 25.873 67.4587 24.0946 69.039C24.0946 69.2257 24.0946 69.4123 24.0946 69.6046C23.9334 69.6666 23.7721 69.7286 23.6059 69.7924C20.6553 71.5248 18.9002 76.043 18.0622 79.1667C16.8187 84.0575 17.0125 89.3423 19.2828 93.9252C19.4018 94.1768 19.5207 94.4283 19.6433 94.6875C21.5873 98.5398 24.4681 100.927 28.3404 102.692C28.5272 102.692 28.714 102.692 28.9065 102.692C28.8999 103.054 28.8933 103.417 28.8866 103.79C28.7617 113.461 31.8302 121.988 38.247 129.275C38.5814 129.661 38.5814 129.661 38.9226 130.054C39.9531 131.223 40.9427 132.314 42.2097 133.234C42.3965 133.234 42.5833 133.234 42.7758 133.234C42.8331 133.391 42.8904 133.547 42.9494 133.708C43.4952 134.622 44.2609 135.193 45.0933 135.832C45.2692 135.968 45.4451 136.105 45.6263 136.245C51.3049 140.551 58.051 143.472 64.8359 145.536C65.072 145.608 65.3082 145.68 65.5515 145.755C66.6876 146.087 67.6269 146.26 68.8162 146.243C69.0965 146.43 69.3767 146.616 69.6654 146.808C74.6664 148.178 80.0811 148.298 85.233 148.505C85.52 148.517 85.807 148.529 86.1026 148.541C92.9327 148.776 100.119 148.238 106.745 146.526C106.923 146.482 107.102 146.438 107.285 146.393C111.515 145.321 115.57 143.929 119.482 142.001C119.705 141.892 119.928 141.783 120.159 141.67C123.253 140.145 126.093 138.453 128.822 136.345C129.079 136.152 129.335 135.959 129.599 135.761C137.598 129.511 143.975 120.652 145.34 110.423C145.632 107.94 145.84 105.476 145.805 102.975C146.089 102.834 146.372 102.694 146.664 102.549C148.746 101.495 150.5 100.531 152.032 98.7328C152.272 98.5112 152.511 98.2895 152.758 98.0612C156.362 94.1834 157.581 89.2171 157.458 84.0461C157.163 78.6681 155.099 73.2446 151.057 69.535C146.448 65.7692 141.398 63.4842 135.333 63.9486C131.114 64.4952 127.535 65.755 124.011 68.1906C123.59 68.4706 123.59 68.4706 123.161 68.7562C122.965 68.6224 122.768 68.4886 122.566 68.3508C114.549 63.1433 104.765 60.9214 95.352 60.0955C95.0168 60.0621 94.6816 60.0286 94.3362 59.9941C92.3911 59.8081 92.3911 59.8081 90.727 60.6655C90.3894 61.0308 90.3894 61.0308 90.0448 61.4035C88.4995 62.0444 87.1265 62.055 85.5161 61.6863C84.7628 61.3649 84.3788 61.1154 83.8001 60.5197C82.6176 59.3763 79.9543 60.2067 78.3868 60.3606Z" fill="#89DCFE" />
        <path d="M68.2501 112.024C68.4369 112.118 68.6238 112.211 68.8162 112.307C69.218 112.312 69.6201 112.298 70.0211 112.275C70.393 112.254 70.393 112.254 70.7723 112.234C71.0413 112.218 71.3102 112.202 71.5873 112.186C74.7565 112.023 77.9161 111.978 81.089 111.977C81.6463 111.976 82.2036 111.975 82.7609 111.974C83.9188 111.972 85.0766 111.972 86.2345 111.972C87.4046 111.972 88.5748 111.97 89.7449 111.966C100.923 111.93 100.923 111.93 105.493 112.257C105.782 112.277 106.071 112.297 106.369 112.317C107.858 112.446 109.036 112.617 110.141 113.721C110.507 116.309 109.639 118.048 108.204 120.137C104.078 125.551 97.6322 128.638 91.0001 129.664C85.5092 130.293 79.6813 129.652 74.7602 127.013C74.5041 126.88 74.248 126.748 73.9841 126.612C69.5652 124.198 65.5128 120.63 64.0221 115.665C63.999 114.603 64.2719 114.037 64.8536 113.156C65.8419 112.351 67.037 112.55 68.2501 112.59C68.2501 112.403 68.2501 112.217 68.2501 112.59Z" fill="#89DCFE" />
        <path d="M119.765 85.724C119.948 85.8192 120.132 85.9143 120.321 86.0124C122.234 87.1292 123.01 89.2322 123.686 91.2519C124.386 94.1077 124.046 97.0301 122.595 99.5812C122.35 100.019 122.35 100.019 122.1 100.465C120.278 102.791 118.099 104.251 115.148 104.654C112.43 104.802 110.084 104.065 107.93 102.409C105.78 100.445 104.787 97.7789 104.382 94.9304C104.267 92.1426 105.279 89.2915 107.028 87.138C110.719 83.6287 115.435 83.0982 119.765 85.724Z" fill="#89DCFE" />
        <path d="M66.2688 86.007C68.3949 87.854 69.7959 90.2681 70.0158 93.0957C70.0884 96.5125 69.3531 99.1474 67.0295 101.72C64.7651 103.772 62.479 104.812 59.3341 104.689C56.7249 104.335 54.4112 103.091 52.7941 101.012C50.9122 98.2362 50.3556 95.2499 50.9842 91.9458C51.6059 89.2778 52.9979 87.228 55.2199 85.5994C55.7252 85.3 55.7252 85.3 56.6451 84.8758C56.8845 84.765 57.1238 84.6542 57.3704 84.54C60.5548 83.4795 63.5194 84.1795 66.2688 86.007Z" fill="#89DCFE" />
        <path d="M107.028 33.972C108.987 34.044 110.802 34.1564 112.406 35.386C113.119 36.3584 113.255 36.8863 113.255 38.0903C112.909 39.2775 112.499 39.6853 111.556 40.4764C110.619 40.8222 110.619 40.8222 109.575 41.0597C109.195 41.152 108.816 41.2448 108.436 41.3381C108.247 41.3831 108.058 41.4281 107.863 41.4745C102.153 42.8513 97.4777 45.6353 94.2905 50.6571C92.7717 53.3169 91.6832 56.3979 91.7685 59.5001C91.7431 60.2723 91.7431 60.2723 91.0178 61.05C89.4753 62.1662 87.9523 62.3783 86.1053 62.1016C85.2769 61.9153 84.7412 61.6829 84.1008 61.1207C82.6653 58.3206 83.7709 54.8889 84.6669 52.0711C87.3546 44.5075 93.0083 39.2588 100.128 35.8633C102.35 34.9331 104.619 34.3988 107.028 34.5376C107.028 34.351 107.028 34.1643 107.028 33.972Z" fill="#0093D2" />
      </svg>
    );
  }
  if (reward.icon) {
    return (
      <Image
        src={`/svg icons/${reward.icon}.svg`}
        alt=""
        width={25}
        height={25}
      />
    );
  }
  return null;
}

function RewardRow({ reward }: { reward: Reward }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 rounded-2xl border border-border bg-background px-3 py-2 h-[68.75px] hover:shadow-sm transition-shadow">
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#0093D2]/10">
        <RewardIcon reward={reward} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="reward-row-action font-medium text-foreground">
          {reward.action}
        </p>
        <p className="reward-row-text text-muted mt-0.5">{reward.reward}</p>
      </div>
    </div>
  );
}

function StageCard({ stage, rewards }: { stage: Stage; rewards: Reward[] }) {
  return (
    <div className="snap-start w-[305px] shrink-0 rounded-2xl border border-border bg-card-surface p-[18px]">
      <h3 className="h3 font-semibold text-foreground mb-1">{stage}</h3>
      <p className="component-subtext mb-3.5 leading-relaxed whitespace-pre-line">
        {stageDescriptions[stage]}
      </p>
      <div className="space-y-1.5">
        {rewards.map((r, i) => (
          <RewardRow key={i} reward={r} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const activeName = categories[activeCategory].name;
  const stageRewards = data[activeName];

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { theme: "dark", hideEventTypeDetails: true, layout: "column_view" });
    })();
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setShowLeftFade(el.scrollLeft > 4);
      setShowRightFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="pt-20 sm:pt-32 pb-10 sm:pb-20 bg-background">
      <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-14">
        {/* Headline */}
        <div className="mb-10 sm:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 items-start">
          <div className="text-left">
            <p className="label font-semibold text-gradient-blue tracking-wider mb-5 sm:mb-3">
              <span className="mr-1">|</span> UNLOCK USER-LED GROWTH
            </p>
            <h1 className="h1 tracking-tight text-foreground">
              Turn your users into your growth engine
            </h1>
          </div>
          <div className="text-left lg:pt-11">
            <p className="h3 sm:!text-[16px] font-normal text-muted leading-relaxed mb-3 sm:mb-4">
RewardBase helps you run reward programs that incentivize user actions that help you grow – referrals, reviews, feedback, and more. Natively inside your product. Seamlessly managed.            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://app.rewardbase.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-foreground text-white text-[15px] font-medium px-4 py-2 hover:bg-foreground/90 transition-colors"
              >
                Start for Free
              </a>
              <button
                type="button"
                data-cal-namespace="30min"
                data-cal-link="cebe-fyi/30min"
                data-cal-config='{"layout":"column_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
                className="inline-flex items-center justify-center rounded-xl border border-border text-foreground text-[15px] font-medium px-4 py-2 hover:bg-card transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs + Carousel Arrows */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div className="inline-flex items-center rounded-full">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(i);
                  setScrollPos(0);
                }}
                className={`rounded-full px-3.5 py-1.5 component-subtext font-medium transition-colors outline-none focus:outline-none focus-visible:outline-none border ${
                  activeCategory === i
                    ? "text-foreground border-neutral-400"
                    : "text-muted hover:text-foreground border-transparent"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 640) {
                  scrollerRef.current?.scrollBy({ left: -(scrollerRef.current.clientWidth + 20), behavior: "smooth" });
                } else {
                  setScrollPos(Math.max(0, scrollPos - 1));
                }
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.innerWidth < 640) {
                  scrollerRef.current?.scrollBy({ left: scrollerRef.current.clientWidth + 20, behavior: "smooth" });
                } else {
                  setScrollPos(Math.min(1, scrollPos + 1));
                }
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Stage Cards Carousel */}
        <div className="relative -mx-3 sm:mx-0">
          <div
            ref={scrollerRef}
            className="overflow-x-auto sm:overflow-hidden snap-x snap-mandatory sm:snap-none touch-pan-y [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="flex gap-5 transition-transform duration-500 ease-out pb-4"
              style={{
                transform: `translateX(-${scrollPos * 325}px)`,
              }}
            >
              {stages.map((stage) => (
                <StageCard key={stage} stage={stage} rewards={stageRewards[stage]} />
              ))}
            </div>
          </div>

          {(scrollPos > 0 || showLeftFade) && (
            <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
          )}
          {(scrollPos < 1 && showRightFade) && (
            <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
          )}
        </div>
      </div>
    </section>
  );
}
