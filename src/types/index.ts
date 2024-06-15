export type Status = "pending" | "done";

export type ListItem = {
  id: string;
  title: string;
  description: string;
  status: Status;
}
