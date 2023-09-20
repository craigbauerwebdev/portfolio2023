export interface DataModel {
  greeting: string;
  tag_line: string;
  resume_url: string;
  contact_email: string;
  short_description: string;
  full_bio: string;
  bio_pic: string;
  contact_text: string;
  tech_logos: {
    tech_logo_1: string;
    tech_logo_2: string;
    tech_logo_3: string;
    tech_logo_4: string;
  };
}

export const DataDefaultValue = {
  greeting: "",
  tag_line: "",
  resume_url: "",
  contact_email: "",
  short_description: "",
  full_bio: "",
  bio_pic: "",
  contact_text: "",
};

export interface DataContextObjModel {
  data: DataModel;
  baseUrl: string;
  env: string;
}

export const ContextDefaultValue = {
  data: DataDefaultValue,
  baseUrl: "",
  env: "",
};
