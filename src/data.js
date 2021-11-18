import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import {
  MdBookmarkRemove,
  MdBookmarks,
  MdDataExploration,
  MdDns,
  MdLeaderboard,
  MdTry,
  MdVerifiedUser,
  MdViewQuilt,
  MdOfflineBolt,
  MdMarkAsUnread,
  MdBackup,
  MdWebStories,
} from "react-icons/md";
import React from "react";
const sublinks = [
  {
    page: "products",
    links: [
      {
        label: "payment",
        icon: <MdBookmarkRemove className="sub-icon" />,
        url: "/payment",
      },
      {
        label: "terminal",
        icon: <MdBookmarks className="sub-icon" />,
        url: "/terminal",
      },
      {
        label: "radar",
        icon: <MdDataExploration className="sub-icon" />,
        url: "/radar",
      },
      { label: "sigma", icon: <MdDns className="sub-icon" />, url: "/sigma" },
      {
        label: "atlas",
        icon: <MdLeaderboard className="sub-icon" />,
        url: "/atlas",
      },
      {
        label: "climate",
        icon: <MdTry className="sub-icon" />,
        url: "/climate",
      },
      {
        label: "tax",
        icon: <MdVerifiedUser className="sub-icon" />,
        url: "/tax",
      },
      {
        label: "identity",
        icon: <MdViewQuilt className="sub-icon" />,
        url: "/identity",
      },
      {
        label: "payment",
        icon: <MdOfflineBolt className="sub-icon" />,
        url: "/payment",
      },
      {
        label: "payment links",
        icon: <MdMarkAsUnread className="sub-icon" />,
        url: "/payment-links",
      },
      {
        label: "invoicing",
        icon: <MdBackup className="sub-icon" />,
        url: "/invoicing",
      },
      {
        label: "billing",
        icon: <MdWebStories className="sub-icon" />,
        url: "/billing",
      },
    ],
    height: 350,
    width: 480,
  },
  {
    page: "cases",
    links: [
      {
        label: "plugins",
        icon: <MdBookmarks className="sub-icon" />,
        url: "/products",
      },
      {
        label: "libraries",
        icon: <FaBook className="sub-icon" />,
        url: "/products",
      },
      {
        label: "help",
        icon: <MdMarkAsUnread className="sub-icon" />,
        url: "/products",
      },
      {
        label: "billing",
        icon: <MdViewQuilt className="sub-icon" />,
        url: "/products",
      },
      {
        label: "billing",
        icon: <MdBackup className="sub-icon" />,
        url: "/products",
      },
    ],
    height: 230,
    width: 430,
  },
  {
    page: "developers",
    links: [
      {
        label: "plugins",
        icon: <FaCreditCard className="sub-icon" />,
        url: "/products",
      },
      {
        label: "libraries",
        icon: <FaBook className="sub-icon" />,
        url: "/products",
      },
      {
        label: "help",
        icon: <FaBook className="sub-icon" />,
        url: "/products",
      },
      {
        label: "billing",
        icon: <FaBook className="sub-icon" />,
        url: "/products",
      },
    ],
    height: 190,
    width: 450,
  },
  {
    page: "company",
    links: [
      {
        label: "about",
        icon: <FaBriefcase className="sub-icon" />,
        url: "/products",
      },
      {
        label: "customers",
        icon: <FaBriefcase className="sub-icon" />,
        url: "/products",
      },
    ],
    height: 150,
    width: 450,
  },
];

export default sublinks;
