import { formatDistance } from "date-fns";
import { useMediaQuery } from "@mui/material";

export const getDateDistance = (date) => {
  if (date) {
    let dateDistance = formatDistance(new Date(date), new Date(), {
      addSuffix: true,
      includeSeconds: true,
    });

    const dateDistanceSplit = dateDistance.split(" ");

    if (dateDistanceSplit[0] === "less" && dateDistanceSplit[1] === "than") {
      dateDistance = "few seconds ago";
    }
    return dateDistance;
  } else {
    return "";
  }
};

export const truncateString = (text, limit) =>
  text.length > limit ? `${text.substring(0, limit)}...` : text;

export const captilalizeString = (text) =>
  text?.charAt(0).toUpperCase() + text?.slice(1);

export const openWindowLink = (link) => {
  if (typeof window !== "undefined") {
    const width = 800;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      link,
      "share-dialog",
      `width=${width},height=${height},top=${top},left=${left}`
    );
  }
  return false;
};

export const copyToClipBoard = (text) => {
  navigator.clipboard.writeText(text);
};

export const isURL = (url) => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(url);
};

export const openLinkInNewTab = (url) => {
  if (typeof window !== "undefined") {
    window.open(url);
  }
};

export const onlyLetters = (str) => {
  return /^[a-zA-Z]+$/.test(str);
};

export const filterNullValuesFromArray = (array) => {
  const filteredArray = [];
  array.forEach((arrayItem) => {
    if (arrayItem) filteredArray.push(arrayItem);
  });
  return filteredArray;
};

export const isEmailValid = (email) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(email);
};

export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const useIsMobileView = () => !useMediaQuery(`(min-width: 1300px)`);

export const randomColor = () => {
  let hexString = "0123456789abcdef";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
};

export const generateGradientColor = (returnClass = true) => {
  // if @param returnClass is false then it returns the color values else return with property.
  let colorOne = randomColor();
  let colorTwo = randomColor();
  let angle = Math.floor(Math.random() * 360);
  if (!returnClass) {
    return { colorOne, colorTwo, angle };
  }
  const gradient = `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
  return gradient;
};

export const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const capitalizeWord = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const getRandomLinearGradientStyles = () => {
  const linearGradients = [
    "linear-gradient(to right, #dc2424, #4a569d)",
    "linear-gradient(to right, #24c6dc, #514a9d)",
    "linear-gradient(to right, #283048, #859398)",
    "linear-gradient(to right, #3d7eaa, #ffe47a)",
    "linear-gradient(to right, #1cd8d2, #93edc7)",
    "linear-gradient(to right, #232526, #414345)",
    "linear-gradient(to right, #5c258d, #4389a2)",
    "linear-gradient(to right, #134e5e, #71b280)",
  ];

  const random = Math.floor(Math.random() * linearGradients.length - 1);

  return linearGradients[random];
};

export const isValidEmail = (email) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(email);
};

export const findMissingValue = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  for (let value of set2) {
    if (!set1.has(value)) {
      return value;
    }
  }
  return null;
};

export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const getTodayDate = () => {
  const now = new Date();
  const date = now.getDate();
  const monthIndex = now.getMonth();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[monthIndex];
  return `${date} ${month}`;
};
