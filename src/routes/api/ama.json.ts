import { ama } from "./_ama";

export async function get() {
  return {
    status: 200,
    body: JSON.stringify(ama),
  };
}