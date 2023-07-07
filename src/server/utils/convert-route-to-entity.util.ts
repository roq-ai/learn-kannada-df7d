const mapping: Record<string, string> = {
  bookings: 'booking',
  clients: 'client',
  contents: 'content',
  lessons: 'lesson',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
