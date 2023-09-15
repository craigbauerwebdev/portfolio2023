export interface DataModel {
  greeting: string;
  tag_line: string;
  resume_url: string;
  contact_email: string;
  short_description: string;
  full_bio: string;
  bio_pic: string;
  contact_text: string;
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

/* data: Model,
    prop: (prop: Model) => void */
