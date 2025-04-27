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
