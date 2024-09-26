/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/src/components/BottomNavigation` | `/src/components/ButtonBox` | `/src/components/DateDisplay` | `/src/components/LocationDisplay` | `/src/components/PrayerTimes` | `/src/navigation/AppNavigation` | `/src/screens/HomeScreen` | `/src/screens/QiblaScreen` | `/src/screens/TasbihScreen` | `/src/services/PrayerTimesService` | `/src/styles/GlobalStyles`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
