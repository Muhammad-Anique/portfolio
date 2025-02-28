import { supabase } from "./supabase";

export const getBlogData = async (blogId: string) => {
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", blogId)
      .single();

    if (error) {
      console.error("Error fetching blog data:", error);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Unexpected error fetching blog data:", err);
    return null;
  }
};

export const fetchAllBlogs = async () => {
  try {
    const { data, error } = await supabase.from("blogs").select("*");

    if (error) {
      console.error("Error fetching blog data:", error);
      return null;
    }
    console.log("ALL THE LOGS", data);
    return data;
  } catch (err) {
    console.error("Unexpected error fetching blog data:", err);
    return null;
  }
};

export const getProjectData = async (projectId: string) => {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", projectId)
      .single();

    if (error) {
      console.error("Error fetching blog data:", error);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Unexpected error fetching blog data:", err);
    return null;
  }
};

export const fetchAllProjects = async () => {
  try {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
      console.error("Error fetching blog data:", error);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Unexpected error fetching blog data:", err);
    return null;
  }
};
