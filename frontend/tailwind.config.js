/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "100px", max: "360px" },
        tablet: { min: "361px", max: "768px" },
        laptop: { min: "769px", max: "1440px " },
        pc: { min: "1441px" },
      },
      colors: {
        "main-color": "#393d46",
        "dark-grey": "#9f9f9f",
        "medium-grey": "#cdcfd1",
        "light-grey": "#dcdcdc",
        "dark-white": "#ffffff",
        "medium-white": "#f5f5f5",
        "light-white": "#f6f7fb",
      },
      fontSize: {
        12: "12px",
        12.5: "12.5px",
        13: "13px",
        14: "14px",
        15: "15px",
        15.5: "15.5px",
        16: "16px",
        17: "17px",
        17.5: "17.5px",
        18: "18px",
        20: "20px",
        21: "21px",
        22: "22px",
        22.5: "22.5px",
        24: "24px",
        25: "25px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        34: "34px",
        36: "36px",
        38: "38px",
        40: "40px",
        42: "42px",
        50: "50px",
        56: "56px",
        64: "64px",
        85: "85px",
        90: "90px",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      letterSpacing: {
        0.3: "0.3px",
        0.5: "0.5px",
        0.6: "0.6px",
        0.9: "0.9px",
        1: "1px",
      },
      width: {
        6: "6%",
        10: "10%",
        13: "13%",
        17.5: "17.5%",
        18: "18px",
        18.5: "18.5%",
        20: "20%",
        22.5: "22.5px",
        "22.5p": "22.5%",
        25: "25%",
        "27.5p": "27.5%",
        30: "30%",
        32: "32%",
        35: "35%",
        40: "40px",
        "40p": "40%",
        45: "45px",
        "45p": "45%",
        48.5: "48.5%",
        50: "50%",
        "50p": "50px",
        52: "52%",
        60: "60%",
        "60p": "60px",
        61: "61%",
        65: "65%",
        70: "70%",
        75: "75%",
        78: "78%",
        80: "80%",
        86: "86%",
        90: "90%",
        150: "150px",
        170: "170px",
        200: "200px",
        213: "213px",
        220: "220px",
        230: "230px",
        250: "250px",
        272.5: "272.5px",
        305: "305px",
        354: "354px",
        355.1: "355.1px",
        450: "450px",
        500: "500px",
        560: "560px",
        575: "575px",
        600: "600px",
        730: "730px",
      },
      height: {
        5: "5%",
        10: "10%",
        12.5: "12.5%",
        15: "15%",
        18: "18px",
        20: "20%",
        22.5: "22.5px",
        25: "25%",
        30: "30px",
        "30p": "30%",
        32: "32%",
        32.5: "32.5px",
        35: "35%",
        40: "40px",
        "40p": "40%",
        42: "42px",
        45: "45px",
        46.25: "46.25px",
        49: "49.9px",
        50: "50px",
        "50p": "50%",
        55: "55px",
        60: "60px",
        "60p": "60%",
        "60vh": "60vh",
        65: "65%",
        70: "70%",
        "70p": "70px",
        75: "75%",
        72.5: "72.5px",
        80: "80%",
        "80p": "80px",
        90: "90%",
        100: "100px",
        120: "120px",
        150: "150px",
        200: "200px",
        222: "222px",
        250: "250px",
        300: "300px",
        320: "320px",
        322.5: "322.5px",
        330: "330px",
        335: "335px",
        360: "360px",
        370: "370px",
        380: "380px",
        400: "400px",
        458: "458px",
        500: "500px",
        550: "550px",
        600: "600px",
        750: "750px",
        1000: "1000px",
        1200: "1200px",
        1550: "1550px",
        2000: "2000px",
      },
      borderRadius: {
        1.5: "1.5px",
        3: "3px",
        5: "5px",
        60: "60px",
      },
      margin: {
        3: "3px",
        5: "5px",
        10: "10px",
        13: "13px",
        15: "15px",
        20: "20px",
        25: "25px",
        28: "28%",
        30: "30px",
        40: "40px",
        50: "50px",
        "50p": "50%",
        60: "60px",
        70: "70px",
        120: "120px",
        160: "160px",
      },
      padding: {
        5: "5px",
        "5p": "5%",
        10: "10px",
        12: "12px",
        15: "15px",
        16: "16px",
        17.5: "17.5px",
        20: "20px",
        22.5: "22.5px",
        30: "30px",
        50: "50px",
        60: "60px",
        150: "150px",
      },
      gap: {
        4: "4px",
        "5p": "5px",
        5: "5%",
        6: "6px",
        7: "7px",
        10: "10px",
        "10p": "10%",
        12: "12px",
        12.5: "12.5px",
        13: "13px",
        15: "15px",
        20: "20px",
        22.5: "22.5px",
        25: "25px",
        27.5: "27.5px",
        30: "30px",
        35: "35px",
        40: "40px",
        50: "50px",
        50.5: "50.5px",
        60: "60px",
        67: "67px",
        80: "80px",
        250: "250px",
      },
    },
  },
  plugins: [],
};
