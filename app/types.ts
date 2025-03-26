export interface ChartData {
  acoustic: number;
  day: number | undefined;
  electric: number;
  month: number;
  year: number;
}

export interface Station {
  id: number;
  name: string;
}

export interface CommunityArea {
  communityArea: number;
}

export interface Timeframe {
  firstDate: Date;
  lastDate: Date;
}

export interface ToplineData {
  trips: {
    acoustic: number;
    electric: number;
  };
  tripsSinceFirstElectric: number;
}

export type WhereSpecifier =
  | CommunityAreaSpecifier
  | StationSpecifier
  | Record<string, never>;

interface StationSpecifier {
  stationId: number;
}

interface CommunityAreaSpecifier {
  station: {
    communityDistrict: number;
  };
}
