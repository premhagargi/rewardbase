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
      { icon: "Starsquaredual", action: "Write a Testimonial", reward: "$100 off Invoice" },
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
      { icon: "UserListIconDual", action: "Complete Your Profile", reward: "50 Welcome Credits" },
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
      { icon: "NewTwitterRectangleIconDual", action: "Repost with Caption", reward: "Unlock Swipe File Library" },
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
      { icon: "Starsquaredual", action: "Write a Testimonial", reward: "$50 Amazon Gift Card" },
      { icon: "RedditIconDual", action: "Recommend on Reddit", reward: "200 Wallet Points" },
      { icon: "NewTwitterRectangleIconDual", action: "Share Your Stack on X", reward: "Unlock Pro Content Vault" },
      { icon: "SpotlightIconDual", action: "Get Featured in Spotlight", reward: "Free Merchandise" },
    ],
  },
};

function RewardIcon({ reward }: { reward: Reward }) {
  if (reward.brand === "ph") {
    return (

<svg className="h-7 w-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="#89CCE9"/>
<mask id="path-2-outside-1_113_13" maskUnits="userSpaceOnUse" x="34" y="23" width="40" height="53" fill="black">
<rect fill="white" x="34" y="23" width="40" height="53"/>
<path d="M35.0213 75V24.0909H54.1122C58.0232 24.0909 61.3045 24.8201 63.956 26.2784C66.6241 27.7367 68.6375 29.7419 69.9965 32.294C71.3719 34.8295 72.0597 37.7131 72.0597 40.9446C72.0597 44.2093 71.3719 47.1094 69.9965 49.6449C68.621 52.1804 66.5909 54.1773 63.9062 55.6357C61.2216 57.0774 57.9155 57.7983 53.9879 57.7983H41.3352V50.2166H52.745C55.032 50.2166 56.9046 49.8189 58.3629 49.0234C59.8213 48.228 60.8984 47.1342 61.5945 45.7422C62.3071 44.3501 62.6634 42.7509 62.6634 40.9446C62.6634 39.1383 62.3071 37.5473 61.5945 36.1719C60.8984 34.7964 59.813 33.7275 58.3381 32.9652C56.8797 32.1863 54.9988 31.7969 52.6953 31.7969H44.2436V75H35.0213Z"/>
</mask>
<path d="M35.0213 75V24.0909H54.1122C58.0232 24.0909 61.3045 24.8201 63.956 26.2784C66.6241 27.7367 68.6375 29.7419 69.9965 32.294C71.3719 34.8295 72.0597 37.7131 72.0597 40.9446C72.0597 44.2093 71.3719 47.1094 69.9965 49.6449C68.621 52.1804 66.5909 54.1773 63.9062 55.6357C61.2216 57.0774 57.9155 57.7983 53.9879 57.7983H41.3352V50.2166H52.745C55.032 50.2166 56.9046 49.8189 58.3629 49.0234C59.8213 48.228 60.8984 47.1342 61.5945 45.7422C62.3071 44.3501 62.6634 42.7509 62.6634 40.9446C62.6634 39.1383 62.3071 37.5473 61.5945 36.1719C60.8984 34.7964 59.813 33.7275 58.3381 32.9652C56.8797 32.1863 54.9988 31.7969 52.6953 31.7969H44.2436V75H35.0213Z" fill="#0093D2"/>
<path d="M35.0213 75H34.0213V76H35.0213V75ZM35.0213 24.0909V23.0909H34.0213V24.0909H35.0213ZM63.956 26.2784L63.474 27.1546L63.4764 27.1559L63.956 26.2784ZM69.9965 32.294L69.1138 32.764L69.1175 32.7709L69.9965 32.294ZM69.9965 49.6449L70.8754 50.1217V50.1217L69.9965 49.6449ZM63.9062 55.6357L64.3794 56.5167L64.3836 56.5144L63.9062 55.6357ZM41.3352 57.7983H40.3352V58.7983H41.3352V57.7983ZM41.3352 50.2166V49.2166H40.3352V50.2166H41.3352ZM58.3629 49.0234L58.8418 49.9013V49.9013L58.3629 49.0234ZM61.5945 45.7422L60.7043 45.2865L60.7 45.295L61.5945 45.7422ZM61.5945 36.1719L60.7022 36.6234L60.7065 36.6319L61.5945 36.1719ZM58.3381 32.9652L57.8669 33.8474L57.8789 33.8536L58.3381 32.9652ZM44.2436 31.7969V30.7969H43.2436V31.7969H44.2436ZM44.2436 75V76H45.2436V75H44.2436ZM35.0213 75H36.0213V24.0909H35.0213H34.0213V75H35.0213ZM35.0213 24.0909V25.0909H54.1122V24.0909V23.0909H35.0213V24.0909ZM54.1122 24.0909V25.0909C57.9027 25.0909 61.0072 25.7978 63.474 27.1546L63.956 26.2784L64.4379 25.4022C61.6017 23.8423 58.1438 23.0909 54.1122 23.0909V24.0909ZM63.956 26.2784L63.4764 27.1559C65.9825 28.5257 67.8515 30.3933 69.1138 32.764L69.9965 32.294L70.8791 31.824C69.4236 29.0906 67.2656 26.9478 64.4356 25.4009L63.956 26.2784ZM69.9965 32.294L69.1175 32.7709C70.4043 35.1431 71.0597 37.8592 71.0597 40.9446H72.0597H73.0597C73.0597 37.5669 72.3395 34.516 70.8754 31.8172L69.9965 32.294ZM72.0597 40.9446H71.0597C71.0597 44.065 70.4035 46.7973 69.1175 49.168L69.9965 49.6449L70.8754 50.1217C72.3403 47.4214 73.0597 44.3536 73.0597 40.9446H72.0597ZM69.9965 49.6449L69.1175 49.168C67.8398 51.5233 65.9542 53.3852 63.4289 54.7569L63.9062 55.6357L64.3836 56.5144C67.2276 54.9695 69.4022 52.8375 70.8754 50.1217L69.9965 49.6449ZM63.9062 55.6357L63.4331 54.7547C60.9299 56.099 57.7967 56.7983 53.9879 56.7983V57.7983V58.7983C58.0342 58.7983 61.5132 58.0559 64.3794 56.5166L63.9062 55.6357ZM53.9879 57.7983V56.7983H41.3352V57.7983V58.7983H53.9879V57.7983ZM41.3352 57.7983H42.3352V50.2166H41.3352H40.3352V57.7983H41.3352ZM41.3352 50.2166V51.2166H52.745V50.2166V49.2166H41.3352V50.2166ZM52.745 50.2166V51.2166C55.1393 51.2166 57.1916 50.8014 58.8418 49.9013L58.3629 49.0234L57.8841 48.1455C56.6175 48.8364 54.9246 49.2166 52.745 49.2166V50.2166ZM58.3629 49.0234L58.8418 49.9013C60.4666 49.0151 61.6953 47.7766 62.4889 46.1894L61.5945 45.7422L60.7 45.295C60.1016 46.4918 59.1759 47.4409 57.8841 48.1455L58.3629 49.0234ZM61.5945 45.7422L62.4846 46.1979C63.2799 44.6444 63.6634 42.8848 63.6634 40.9446H62.6634H61.6634C61.6634 42.6171 61.3343 44.0559 60.7043 45.2865L61.5945 45.7422ZM62.6634 40.9446H63.6634C63.6634 39.0048 63.28 37.2514 62.4824 35.7119L61.5945 36.1719L60.7065 36.6319C61.3342 37.8433 61.6634 39.2717 61.6634 40.9446H62.6634ZM61.5945 36.1719L62.4867 35.7204C61.6884 34.1427 60.4436 32.9278 58.7972 32.0768L58.3381 32.9652L57.8789 33.8536C59.1823 34.5272 60.1085 35.4501 60.7022 36.6234L61.5945 36.1719ZM58.3381 32.9652L58.8092 32.0831C57.1601 31.2024 55.102 30.7969 52.6953 30.7969V31.7969V32.7969C54.8956 32.7969 56.5993 33.1702 57.867 33.8473L58.3381 32.9652ZM52.6953 31.7969V30.7969H44.2436V31.7969V32.7969H52.6953V31.7969ZM44.2436 31.7969H43.2436V75H44.2436H45.2436V31.7969H44.2436ZM44.2436 75V74H35.0213V75V76H44.2436V75Z" fill="white" fill-opacity="0.2" mask="url(#path-2-outside-1_113_13)"/>
</svg>

    );
  }
  if (reward.brand === "g2") {
    return (

<svg className="h-7 w-7" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="#89CCE9"/>
<path d="M61.8705 62.322C64.064 66.0243 66.233 69.6846 68.4004 73.3409C58.8029 80.4878 43.871 81.3515 32.8172 73.1212C20.0966 63.6425 18.0059 47.4691 24.8163 35.8268C32.6492 22.4356 47.3071 19.4741 56.7448 21.6457C56.4896 22.185 50.8371 33.591 50.8371 33.591C50.8371 33.591 50.3902 33.6195 50.1375 33.6243C47.3479 33.7393 45.2702 34.3706 43.0433 35.4905C40.6001 36.7305 38.5063 38.5338 36.945 40.7426C35.3837 42.9514 34.4023 45.4986 34.0868 48.1615C33.7575 50.862 34.1414 53.5996 35.2023 56.1158C36.0992 58.2429 37.368 60.1322 39.069 61.7271C41.6783 64.1763 44.7834 65.6928 48.3827 66.1948C51.7911 66.6707 55.0691 66.1996 58.1408 64.6982C59.293 64.1359 60.2731 63.5148 61.4188 62.663C61.5647 62.571 61.6944 62.4544 61.8705 62.322Z" fill="#0093D2"/>
<path d="M24.3848 35.5742C32.3501 21.9568 47.2518 18.9484 56.8564 21.1582L57.4629 21.2979L57.1963 21.8594C57.066 22.1346 55.5863 25.1277 54.1436 28.042C53.421 29.5015 52.7058 30.9447 52.1719 32.0225C51.905 32.5612 51.6834 33.0094 51.5283 33.3223C51.4509 33.4784 51.3901 33.601 51.3486 33.6846C51.3279 33.7263 51.3125 33.7587 51.3018 33.7803C51.2964 33.7911 51.2918 33.7992 51.2891 33.8047L51.2852 33.8125L51.1572 34.0713L50.8691 34.0898H50.8633C50.8599 34.0901 50.8549 34.0904 50.8486 34.0908C50.8356 34.0916 50.8163 34.0933 50.793 34.0947C50.7465 34.0975 50.682 34.1016 50.6094 34.1055C50.4693 34.113 50.2919 34.1203 50.1572 34.123C47.4472 34.2349 45.4385 34.8458 43.2676 35.9375C40.8969 37.1412 38.8668 38.8904 37.3535 41.0312C35.8399 43.1727 34.8887 45.6413 34.583 48.2207V48.2217C34.2643 50.8353 34.636 53.4858 35.6631 55.9219C36.535 57.9895 37.7652 59.8189 39.4111 61.3623L39.8926 61.7979C42.3252 63.922 45.1757 65.2422 48.4521 65.6992C51.7674 66.162 54.9439 65.7041 57.9209 64.249H57.9219C59.0399 63.7034 59.9931 63.0996 61.1201 62.2617L61.1357 62.25L61.1523 62.2402C61.2784 62.1608 61.3456 62.0918 61.5703 61.9229L62.0166 61.5869L62.3008 62.0674C64.4942 65.7695 66.6628 69.4298 68.8301 73.0859L69.0596 73.4727L68.6992 73.7422C59.0857 80.901 44.2305 81.8623 33.0479 73.9082L32.5186 73.5225C19.5838 63.8842 17.4522 47.4255 24.3848 35.5742Z" stroke="white" stroke-opacity="0.2"/>
<path d="M61.8917 29.8521C61.3348 29.3192 60.8186 28.8274 60.3049 28.3325C59.9983 28.0375 59.7031 27.7305 59.3892 27.4426C59.2767 27.3387 59.1446 27.1967 59.1446 27.1967C59.1446 27.1967 59.2514 26.9763 59.297 26.8858C59.898 25.7128 60.8398 24.8554 61.9569 24.1733C63.1923 23.4134 64.6315 23.0267 66.0927 23.0622C67.9625 23.0979 69.701 23.5507 71.1679 24.7706C72.2508 25.6708 72.8061 26.8129 72.9039 28.1763C73.067 30.4763 72.0885 32.2379 70.1454 33.4672C69.0038 34.1905 67.7725 34.7497 66.538 35.412C65.8571 35.7776 65.2749 36.0988 64.6095 36.7603C64.024 37.4241 63.9955 38.0499 63.9955 38.0499L72.8403 38.0388V41.8704H59.1878V41.5C59.1356 39.6171 59.3615 37.8453 60.2478 36.1353C61.0632 34.5665 62.3304 33.418 63.8528 32.5337C65.0254 31.8524 66.2599 31.2726 67.4349 30.5945C68.1598 30.1765 68.6719 29.5634 68.6678 28.6743C68.6678 27.9114 68.097 27.2332 67.2816 27.0215C65.3589 26.517 63.4019 27.3221 62.3842 29.0336C62.2358 29.2835 62.0841 29.5317 61.8917 29.8521ZM79 58.2493L71.5463 45.729H56.7962L49.2943 58.3785H64.1529L71.4851 70.8394L79 58.2493Z" fill="#0093D2"/>
<path d="M71.8304 45.2289L71.976 45.473L79.4301 57.9935L79.5824 58.2494L79.4291 58.5052L71.9144 71.0961L71.4818 71.8197L71.0541 71.0931L63.8666 58.8783H48.4164L48.8646 58.1234L56.3666 45.474L56.5111 45.2289H71.8304ZM66.1049 22.5619L66.1039 22.5629C68.0493 22.6002 69.909 23.0734 71.4877 24.3861L71.7045 24.5756C72.6843 25.4727 73.2266 26.5808 73.3763 27.8627L73.4027 28.14V28.141C73.5798 30.6393 72.4981 32.5695 70.4125 33.889L70.4135 33.89C69.2533 34.6251 67.9688 35.2124 66.7748 35.8529C66.1068 36.2116 65.5814 36.5019 64.9769 37.099C64.8383 37.2575 64.7408 37.4122 64.6703 37.5492L72.8392 37.5385H73.3402V42.3705H58.6879V41.514L58.682 40.7924C58.7031 39.1162 58.9827 37.4905 59.8041 35.9056V35.9047C60.6741 34.2308 62.0206 33.0195 63.6019 32.101C64.1992 31.7539 64.8109 31.4336 65.4115 31.1195C66.0153 30.8037 66.6082 30.4944 67.1849 30.1615C67.8124 29.7997 68.1702 29.328 68.1674 28.6771V28.6742C68.1673 28.1719 67.7841 27.6685 67.1556 27.5052H67.1547C65.4484 27.0576 63.718 27.7688 62.8138 29.2894C62.6651 29.5398 62.5101 29.7943 62.3207 30.1097L61.9984 30.6459L61.5463 30.2133L59.9584 28.6927C59.6296 28.3764 59.3628 28.0968 59.0511 27.8109L59.0502 27.8099C58.9841 27.7489 58.915 27.6802 58.8656 27.6293C58.8405 27.6035 58.8193 27.5809 58.8041 27.5648C58.7964 27.5567 58.7899 27.5499 58.7855 27.5453C58.7834 27.543 58.7819 27.5407 58.7806 27.5394L58.7787 27.5375L58.5453 27.2865L58.6947 26.9789V26.9779L58.6957 26.976C58.6965 26.9743 58.6981 26.9722 58.6996 26.9691C58.7026 26.9629 58.7069 26.9538 58.7123 26.9427C58.7231 26.9205 58.7379 26.8894 58.7543 26.8558C58.7865 26.7899 58.8263 26.7093 58.851 26.6605L58.8519 26.6576C59.5071 25.3788 60.5275 24.4603 61.6967 23.7465C63.0146 22.9361 64.5485 22.5241 66.1049 22.5619Z" stroke="white" stroke-opacity="0.2"/>
</svg>

    );
  }
  if (reward.icon === "RedditIconDual") {
    return (

<svg className="h-7 w-7" viewBox="0 0 175 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="88.5" cy="82.5" rx="76.5" ry="72.5" fill="#0093D2"/>
<path d="M90.0448 0.0362959C90.4016 0.0444981 90.4016 0.0444981 90.7655 0.0528661C97.9549 0.238378 105.103 1.26614 112.017 3.26396C112.821 3.46265 113.562 3.4967 114.387 3.42987C114.387 3.61652 114.387 3.80317 114.387 3.99547C114.714 4.10228 115.04 4.20909 115.377 4.31914C118.249 5.28011 121.043 6.36337 123.816 7.58347C124.264 7.77995 124.264 7.77995 124.72 7.98039C126.235 8.65561 127.676 9.37978 129.105 10.217C129.482 10.3138 129.86 10.4086 130.238 10.4998C130.617 10.7799 130.994 11.0631 131.37 11.3482C131.774 11.6027 132.181 11.8518 132.592 12.0961C137.578 15.0998 142.169 18.4124 146.512 22.2883C147.109 22.81 147.731 23.2988 148.353 23.7913C149.465 24.8427 150.469 25.9827 151.476 27.133C151.838 27.5347 152.211 27.927 152.595 28.3073C153.729 29.4515 154.706 30.7361 155.712 31.9925C155.938 32.2735 156.164 32.5546 156.398 32.8442C170.34 50.5227 176.911 74.2137 174.289 96.5256C173.146 105.713 170.599 114.751 166.468 123.053C166.34 123.313 166.213 123.573 166.081 123.84C164.204 127.633 162.131 131.202 159.675 134.648C159.539 134.839 159.404 135.03 159.264 135.227C156.847 138.62 154.242 141.796 151.394 144.837C150.77 145.506 150.174 146.192 149.591 146.897C149.369 147.148 149.147 147.398 148.919 147.657C148.732 147.657 148.545 147.657 148.353 147.657C148.353 147.844 148.353 148.03 148.353 148.222C147.977 148.601 147.977 148.601 147.433 149.053C146.568 149.785 145.727 150.534 144.9 151.31C143.401 152.713 141.853 154.003 140.198 155.219C139.448 155.775 138.971 156.202 138.446 156.989C138.248 157.065 138.049 157.141 137.845 157.219C137.104 157.525 136.661 157.811 136.04 158.297C122.664 168.608 104.718 173.328 88.1093 173.831C87.9143 173.837 87.7194 173.843 87.5185 173.849C81.208 174.034 74.8935 173.998 68.5809 173.995C66.7752 173.994 64.9695 173.995 63.1638 173.995C59.949 173.996 56.7341 173.995 53.5193 173.994C50.6116 173.992 47.704 173.993 44.7963 173.994C41.3969 173.995 37.9975 173.996 34.5981 173.995C32.8066 173.995 31.015 173.995 29.2234 173.996C27.5446 173.996 25.8657 173.996 24.1868 173.994C23.5728 173.994 22.9589 173.994 22.3449 173.995C13.6734 174.003 13.6734 174.003 11.6405 172.26C10.7741 171.34 10.7282 170.529 10.6852 169.309C10.7585 167.032 11.7963 165.642 13.3388 164.059C13.8984 163.559 14.4688 163.074 15.0404 162.588C15.7638 161.935 16.3732 161.214 17.0019 160.471C17.882 159.483 18.8275 158.563 19.7746 157.64C20.6235 156.806 21.3729 155.939 22.1133 155.01C22.7144 154.39 23.3289 153.788 23.9502 153.189C24.3947 152.76 24.8373 152.33 25.2799 151.899C25.4308 151.755 25.5817 151.612 25.7371 151.464C26.6024 150.615 27.0834 149.919 27.4912 148.788C27.3331 148.633 27.1749 148.478 27.012 148.318C21.4796 142.881 21.4796 142.881 19.2828 140.021C19.0226 139.704 18.7612 139.387 18.4989 139.071C15.3771 135.292 12.7292 131.256 10.3601 126.968C10.239 126.751 10.1179 126.535 9.9931 126.312C9.88724 126.12 9.78139 125.927 9.67232 125.728C9.57458 125.592 9.47684 125.456 9.37614 125.316C9.18933 125.316 9.00252 125.316 8.81005 125.316C8.73817 124.991 8.66629 124.666 8.59223 124.332C8.26981 123.046 7.76308 121.899 7.20021 120.703C2.58299 110.575 2.58299 110.575 2.58299 106.651C2.30277 106.651 2.02255 106.651 1.73384 106.651C1.79222 106.47 1.8506 106.29 1.91075 106.103C2.07654 104.75 1.7796 103.349 1.16775 102.126C0.925933 100.531 0.76859 98.9239 0.601652 97.3188C0.57488 97.0683 0.548108 96.8178 0.520524 96.5596C-1.18726 80.1805 1.26294 63.5247 8.527 48.6776C8.71472 48.284 8.90231 47.8903 9.08978 47.4967C11.2111 43.098 13.7529 39.0243 16.6259 35.0794C16.9944 34.5709 17.3569 34.0588 17.7172 33.5445C18.0193 33.1175 18.0193 33.1175 18.3275 32.6818C18.5005 32.4365 18.6734 32.1911 18.8516 31.9383C18.9939 31.7696 19.1362 31.6008 19.2828 31.4269C19.4696 31.4269 19.6564 31.4269 19.8489 31.4269C19.9168 31.269 19.9847 31.1112 20.0546 30.9486C20.4934 30.1537 21.0357 29.5647 21.6534 28.8994C22.3136 28.1856 22.9545 27.4777 23.5584 26.7154C24.2183 25.9011 24.9815 25.3015 25.7929 24.6397C26.2666 24.1704 26.7382 23.6988 27.2082 23.2257C29.5241 20.9827 31.9715 19.0162 34.5797 17.1246C35.0945 16.7498 35.6048 16.3698 36.1142 15.9879C43.3953 10.5852 51.7309 6.75104 60.3248 3.99547C60.3248 3.80882 60.3248 3.62217 60.3248 3.42987C60.5703 3.4134 60.5703 3.4134 60.8208 3.39659C62.8229 3.23276 64.7106 2.8134 66.658 2.33403C74.3428 0.516385 82.1486 -0.173345 90.0448 0.0362959ZM110.204 26.4083C108.388 28.6504 106.521 31.5515 106.745 34.5377C107.025 34.3977 107.025 34.3977 107.311 34.2549C107.909 34.3037 108.504 34.3784 109.098 34.467C109.578 34.5348 109.578 34.5348 110.067 34.6039C111.008 34.8245 111.625 35.1069 112.406 35.6688C112.942 36.5455 112.973 37.0567 112.936 38.0903C112.65 39.2138 112.459 39.4859 111.557 40.1936C110.749 40.5236 109.923 40.7493 109.08 40.9713C108.855 41.0336 108.631 41.096 108.4 41.1602C107.849 41.3127 107.297 41.4606 106.745 41.6076C107.436 43.6612 108.325 45.4202 109.858 46.9808C110.138 47.0741 110.419 47.1674 110.707 47.2636C110.902 47.6376 111.09 48.0151 111.273 48.3948C113.963 51.0889 117.986 52.1076 121.675 52.1595C125.986 52.1394 129.556 50.9199 132.694 47.9363C135.592 44.9681 137.248 41.4745 137.333 37.2883C137.193 33.5162 136.096 30.0787 133.634 27.1849C133.451 26.9676 133.269 26.7504 133.08 26.5265C130.26 23.4529 126.663 21.7998 122.526 21.4516C117.75 21.3027 113.491 22.9001 110.204 26.4083ZM78.3868 60.3606C78.1948 60.3795 78.0028 60.3983 77.805 60.4177C74.5712 60.7383 71.406 61.1746 68.2501 61.9691C67.9115 62.054 67.573 62.1389 67.2241 62.2265C64.8896 62.8318 62.6074 63.5306 60.3602 64.4082C60.009 64.5447 60.009 64.5447 59.6508 64.6839C58.3607 65.2112 57.1911 65.8098 56.0172 66.5623C53.1124 68.4146 53.1124 68.4146 51.8334 68.7562C50.3871 68.4284 49.4922 67.7529 48.3508 66.8426C47.5525 66.2627 46.6821 65.9105 45.7655 65.5571C45.5898 65.4887 45.4141 65.4203 45.233 65.3499C40.4633 63.5772 35.0001 63.2239 30.2576 65.2875C28.1117 66.2964 25.873 67.4587 24.0946 69.039C24.0946 69.2257 24.0946 69.4123 24.0946 69.6046C23.9334 69.6666 23.7721 69.7286 23.6059 69.7924C20.6553 71.5248 18.9002 76.043 18.0622 79.1667C16.8187 84.0575 17.0125 89.3423 19.2828 93.9252C19.4018 94.1768 19.5207 94.4283 19.6433 94.6875C21.5873 98.5398 24.4681 100.927 28.3404 102.692C28.5272 102.692 28.714 102.692 28.9065 102.692C28.8999 103.054 28.8933 103.417 28.8866 103.79C28.7617 113.461 31.8302 121.988 38.247 129.275C38.5814 129.661 38.5814 129.661 38.9226 130.054C39.9531 131.223 40.9427 132.314 42.2097 133.234C42.3965 133.234 42.5833 133.234 42.7758 133.234C42.8331 133.391 42.8904 133.547 42.9494 133.708C43.4952 134.622 44.2609 135.193 45.0933 135.832C45.2692 135.968 45.4451 136.105 45.6263 136.245C51.3049 140.551 58.051 143.472 64.8359 145.536C65.072 145.608 65.3082 145.68 65.5515 145.755C66.6876 146.087 67.6269 146.26 68.8162 146.243C69.0965 146.43 69.3767 146.616 69.6654 146.808C74.6664 148.178 80.0811 148.298 85.233 148.505C85.52 148.517 85.807 148.529 86.1026 148.541C92.9327 148.776 100.119 148.238 106.745 146.526C106.923 146.482 107.102 146.438 107.285 146.393C111.515 145.321 115.57 143.929 119.482 142.001C119.705 141.892 119.928 141.783 120.159 141.67C123.253 140.145 126.093 138.453 128.822 136.345C129.079 136.152 129.335 135.959 129.599 135.761C137.598 129.511 143.975 120.652 145.34 110.423C145.632 107.94 145.84 105.476 145.805 102.975C146.089 102.834 146.372 102.694 146.664 102.549C148.746 101.495 150.5 100.531 152.032 98.7328C152.272 98.5112 152.511 98.2895 152.758 98.0612C156.362 94.1834 157.581 89.2171 157.458 84.0461C157.163 78.6681 155.099 73.2446 151.057 69.535C146.448 65.7692 141.398 63.4842 135.333 63.9486C131.114 64.4952 127.535 65.755 124.011 68.1906C123.59 68.4706 123.59 68.4706 123.161 68.7562C122.965 68.6224 122.768 68.4886 122.566 68.3508C114.549 63.1433 104.765 60.9214 95.352 60.0955C95.0168 60.0621 94.6816 60.0286 94.3362 59.9941C92.3911 59.8081 92.3911 59.8081 90.727 60.6655C90.3894 61.0308 90.3894 61.0308 90.0448 61.4035C88.4995 62.0444 87.1265 62.055 85.5161 61.6863C84.7628 61.3649 84.3788 61.1154 83.8001 60.5197C82.6176 59.3763 79.9543 60.2067 78.3868 60.3606Z" fill="#89CCE9"/>
<path d="M68.2501 112.024C68.4369 112.118 68.6238 112.211 68.8162 112.307C69.218 112.312 69.6201 112.298 70.0211 112.275C70.393 112.254 70.393 112.254 70.7723 112.234C71.0413 112.218 71.3102 112.202 71.5873 112.186C74.7565 112.023 77.9161 111.978 81.089 111.977C81.6463 111.976 82.2036 111.975 82.7609 111.974C83.9188 111.972 85.0766 111.972 86.2345 111.972C87.4046 111.972 88.5748 111.97 89.7449 111.966C100.923 111.93 100.923 111.93 105.493 112.257C105.782 112.277 106.071 112.297 106.369 112.317C107.858 112.446 109.036 112.617 110.141 113.721C110.507 116.309 109.639 118.048 108.204 120.137C104.078 125.551 97.6322 128.638 91.0001 129.664C85.5092 130.293 79.6813 129.652 74.7602 127.013C74.5041 126.88 74.248 126.748 73.9841 126.612C69.5652 124.198 65.5128 120.63 64.0221 115.665C63.999 114.603 64.2719 114.037 64.8536 113.156C65.8419 112.351 67.037 112.55 68.2501 112.59C68.2501 112.403 68.2501 112.217 68.2501 112.024Z" fill="#89DCFE"/>
<path d="M119.765 85.724C119.948 85.8192 120.132 85.9143 120.321 86.0124C122.234 87.1292 123.01 89.2322 123.686 91.2519C124.386 94.1077 124.046 97.0301 122.595 99.5812C122.35 100.019 122.35 100.019 122.1 100.465C120.278 102.791 118.099 104.251 115.148 104.654C112.43 104.802 110.084 104.065 107.93 102.409C105.78 100.445 104.787 97.7789 104.382 94.9304C104.267 92.1426 105.279 89.2915 107.028 87.138C110.719 83.6287 115.435 83.0982 119.765 85.724Z" fill="#89DCFE"/>
<path d="M66.2688 86.007C68.3949 87.854 69.7959 90.2681 70.0158 93.0957C70.0884 96.5125 69.3531 99.1474 67.0295 101.72C64.7651 103.772 62.479 104.812 59.3341 104.689C56.7249 104.335 54.4112 103.091 52.7941 101.012C50.9122 98.2362 50.3556 95.2499 50.9842 91.9458C51.6059 89.2778 52.9979 87.228 55.2199 85.5994C55.7252 85.3 55.7252 85.3 56.6451 84.8758C56.8845 84.765 57.1238 84.6542 57.3704 84.54C60.5548 83.4795 63.5194 84.1795 66.2688 86.007Z" fill="#89DCFE"/>
<path d="M107.028 33.972C108.987 34.044 110.802 34.1564 112.406 35.386C113.119 36.3584 113.255 36.8863 113.255 38.0903C112.909 39.2775 112.499 39.6853 111.556 40.4764C110.619 40.8222 110.619 40.8222 109.575 41.0597C109.195 41.152 108.816 41.2448 108.436 41.3381C108.247 41.3831 108.058 41.4281 107.863 41.4745C102.153 42.8513 97.4777 45.6353 94.2905 50.6571C92.7717 53.3169 91.6832 56.3979 91.7685 59.5001C91.7431 60.2723 91.7431 60.2723 91.0178 61.05C89.4753 62.1662 87.9523 62.3783 86.1053 62.1016C85.2769 61.9153 84.7412 61.6829 84.1008 61.1207C82.6653 58.3206 83.7709 54.8889 84.6669 52.0711C87.3546 44.5075 93.0083 39.2588 100.128 35.8633C102.35 34.9331 104.619 34.3988 107.028 34.5376C107.028 34.351 107.028 34.1643 107.028 33.972Z" fill="#0093D2"/>
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
        <p className="reward-row-action font-semibold text-foreground">
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
        <div className="mb-16 sm:mb-20 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div className="text-left">
            <p className="label font-semibold text-gradient-blue tracking-wider mb-5 sm:mb-3">
              <span className="mr-1">|</span> UNLOCK USER-LED GROWTH
            </p>
            <h1 className="h1 tracking-tight text-foreground">
              Turn your users into your growth engine
            </h1>
          </div>
          <div className="text-left lg:pt-12 lg:pl-8">
            <p className="component-description font-normal text-muted leading-relaxed mb-5 sm:mb-4">
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
        <div className="flex items-center justify-between mb-4 sm:mb-4">
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
        <div className="relative -mx-3 sm:mx-0 sm:w-screen sm:left-1/2 sm:right-1/2 sm:-ml-[50vw] sm:-mr-[50vw] sm:pr-16">
          <div
            ref={scrollerRef}
            className="overflow-x-auto sm:overflow-hidden snap-x snap-mandatory sm:snap-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="flex gap-5 transition-transform duration-500 ease-out pb-4 sm:pl-14 lg:pl-[max(64px,calc((100vw-1152px)/2+64px))]"
              style={{
                transform:
                  scrollPos === 0
                    ? "translateX(0)"
                    : `translateX(calc(-1 * (max(40px, (100vw - 1152px)/2 + 56px) - 16px) - ${(scrollPos - 1) * 325}px))`,
              }}
            >
              {stages.map((stage) => (
                <StageCard key={stage} stage={stage} rewards={stageRewards[stage]} />
              ))}
            </div>
          </div>

          <div className="sm:hidden pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="sm:hidden pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent z-10" />
          {(scrollPos > 0 || showLeftFade) && (
            <div className="hidden sm:block pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
          )}
          {(scrollPos < 1 && showRightFade) && (
            <div className="hidden sm:block pointer-events-none absolute inset-y-0 right-16 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          )}
        </div>
      </div>
    </section>
  );
}
