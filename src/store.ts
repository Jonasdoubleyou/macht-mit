export function get(key: string) {
  return localStorage.getItem("MachtMit-" + key);
}

export function set(key: string, value: any) {
  return localStorage.setItem("MachtMit-" + key, value);
}
