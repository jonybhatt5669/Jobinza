import { EmploymentType, ExperienceLevel } from '../types/JobTypes';

/**
 * Represents a job post in the Jobinza app.
 */
export interface JobPost {
  /**
   * Unique identifier for the job post.
   */
  jobId: string;

  /**
   * Title of the job, e.g., "Software Engineer".
   */
  title: string;

  /**
   * Unique identifier of the company posting the job.
   */
  companyId: string;

  /**
   * Location of the job, e.g., "San Francisco, CA" or "Remote".
   */
  location: string;

  /**
   * Detailed description of the job.
   */
  description: string;

  /**
   * Salary range, e.g., "$80,000 - $120,000". Optional.
   */
  salaryRange?: string;

  /**
   * Type of employment, e.g., "Full-time", "Part-time".
   */
  employmentType: EmploymentType;

  /**
   * Deadline for applications, in "YYYY-MM-DD" format.
   */
  applicationDeadline: string;

  /**
   * Date the job was posted, in "YYYY-MM-DD" format.
   */
  postedDate: string;

  /**
   * List of required skills, e.g., ["JavaScript", "React"].
   */
  skills: string[];

  /**
   * Required experience level, e.g., "Mid-level".
   */
  experienceLevel: ExperienceLevel;

  /**
   * List of benefits, e.g., ["Health insurance", "Remote work"]. Optional.
   */
  benefits?: string[];
}

/**
 * Possible employment types.
 */
export interface JobListing {
  id: string;
  date_posted: string; // ISO string
  date_created: string; // ISO string
  title: string;
  organization: string;
  organization_url: string;
  date_validthrough: string | null;
  locations_raw?: string;
  location_type: string | null;
  location_requirements_raw: string | null;
  salary_raw?: {
    '@type': 'MonetaryAmount';
    currency: string;
    value: {
      '@type': 'QuantitativeValue';
      unitText: string;
      minValue: number;
      maxValue: number;
    };
  };
  employment_type: string[]; // e.g. ["INTERN"]
  url: string;
  source_type: string;
  source: string;
  source_domain: string;
  organization_logo: string;
  cities_derived: string[];
  regions_derived: string[];
  countries_derived: string[];
  locations_derived: string[];
  timezones_derived: string[];
  lats_derived: number[];
  lngs_derived: number[];
  remote_derived: boolean;
  recruiter_name: string | null;
  recruiter_title: string | null;
  recruiter_url: string | null;
  linkedin_org_employees: number | null;
  linkedin_org_url: string | null;
  linkedin_org_size: string | null;
  linkedin_org_slogan: string | null;
  linkedin_org_industry: string | null;
  linkedin_org_followers: number | null;
  linkedin_org_headquarters: string | null;
  linkedin_org_type: string | null;
  linkedin_org_foundeddate: string | null;
  linkedin_org_specialties: string[] | null;
  linkedin_org_locations: string[] | null;
  linkedin_org_description: string | null;
  linkedin_org_recruitment_agency_derived: boolean | null;
  seniority: string | null;
  directapply: boolean | null;
  linkedin_org_slug: string | null;
}
