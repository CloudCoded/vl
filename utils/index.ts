export const makeid = (length: number = 10) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
};

export const getAllPositions = () => {
  return [
    {
      id: "gceo",
      name: "Global CEO",
    },
    {
      id: "customer_care",
      name: "Customer Care",
    },
    {
      id: "sales_lead",
      name: "Sales Lead",
    },
    {
      id: "sales_rep",
      name: "Sales Rep",
    },
    {
      id: "customer_success",
      name: "Customer Success",
    },
    {
      id: "fulfilment_officer",
      name: "Fulfilment Officer",
    },
    {
      id: "marketing",
      name: "Marketing",
    },
  ];
};

export const statesInNigeria = [
  { key: "abia", label: "Abia" },
  { key: "abuja", label: "Abuja" },
  { key: "adamawa", label: "Adamawa" },
  { key: "akwa-ibom", label: "Akwa Ibom" },
  { key: "anambra", label: "Anambra" },
  { key: "bauchi", label: "Bauchi" },
  { key: "bayelsa", label: "Bayelsa" },
  { key: "benue", label: "Benue" },
  { key: "borno", label: "Borno" },
  { key: "cross-river", label: "Cross River" },
  { key: "delta", label: "Delta" },
  { key: "ebonyi", label: "Ebonyi" },
  { key: "edo", label: "Edo" },
  { key: "ekiti", label: "Ekiti" },
  { key: "enugu", label: "Enugu" },
  { key: "gombe", label: "Gombe" },
  { key: "imo", label: "Imo" },
  { key: "jigawa", label: "Jigawa" },
  { key: "kaduna", label: "Kaduna" },
  { key: "kano", label: "Kano" },
  { key: "katsina", label: "Katsina" },
  { key: "kebbi", label: "Kebbi" },
  { key: "kogi", label: "Kogi" },
  { key: "kwara", label: "Kwara" },
  { key: "lagos", label: "Lagos" },
  { key: "nasarawa", label: "Nasarawa" },
  { key: "niger", label: "Niger" },
  { key: "ogun", label: "Ogun" },
  { key: "ondo", label: "Ondo" },
  { key: "osun", label: "Osun" },
  { key: "oyo", label: "Oyo" },
  { key: "plateau", label: "Plateau" },
  { key: "rivers", label: "Rivers" },
  { key: "sokoto", label: "Sokoto" },
  { key: "taraba", label: "Taraba" },
  { key: "yobe", label: "Yobe" },
  { key: "zamfara", label: "Zamfara" },
];


export const sanitizeAmount = (amount: string) => {
  const amountValue = amount.replace(/[^0-9.]/g, ""); // Remove non-numeric characters
  const parsedAmount = parseFloat(amountValue);

  return isNaN(parsedAmount) ? 0 : parsedAmount; // Return 0 if NaN
};

export const onCurrencyInputChange = (value: string, symbol: string) => {
  const numericValue = value.replace(/[^0-9]/g, "");

  const formattedValue = new Intl.NumberFormat().format(Number(numericValue));

  return `${symbol ? symbol : ""}${formattedValue}`;
};