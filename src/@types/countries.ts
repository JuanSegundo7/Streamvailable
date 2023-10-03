export interface Country {
    countryCode: string;
    name: CountryCode;
    services: Services
    flag: string
}

export interface Services {
  type: string;
  description: string;
  additionalProperties: AdditionalProperties2;
}

interface AdditionalProperties2 {
  type: string;
  'x-additionalPropertiesName': string;
  description: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties4;
}

interface Properties4 {
  id: CountryCode;
  name: CountryCode;
  homePage: CountryCode;
  themeColorCode: CountryCode;
  images: Images;
  supportedStreamingTypes: SupportedStreamingTypes;
  addons: Addons;
}

interface Addons {
  type: string;
  description: string;
  additionalProperties: AdditionalProperties;
}

interface AdditionalProperties {
  type: string;
  'x-additionalPropertiesName': string;
  description: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties3;
}

interface Properties3 {
  id: Id;
  displayName: Id;
  homePage: Id;
  themeColorCode: Id;
  image: Id;
}

interface Id {
  description: string;
}

interface SupportedStreamingTypes {
  type: string;
  description: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties2;
}

interface Properties2 {
  addon: CountryCode;
  buy: CountryCode;
  rent: CountryCode;
  free: CountryCode;
  subscription: CountryCode;
}

interface Images {
  type: string;
  description: string;
  required: string[];
  additionalProperties: boolean;
  properties: Properties;
}

interface Properties {
  lightThemeImage: CountryCode;
  darkThemeImage: CountryCode;
  whiteImage: CountryCode;
}

interface CountryCode {
  type: string;
  description: string;
}