export interface HamptonsOrigin {
  name: string;
  borough: string;
  description: string;
  driveOffsetMins: number; // offset from Midtown base time
}

export interface HamptonsDestination {
  name: string;
  description: string;
  knownFor: string;
  baseTimeMin: number; // minutes from Midtown, low end
  baseTimeMax: number; // minutes from Midtown, high end
}

export const hamptonOrigins: Record<string, HamptonsOrigin> = {
  'soho': {
    name: 'SoHo',
    borough: 'Manhattan',
    description: 'SoHo, Manhattan — cast-iron loft district south of Houston Street',
    driveOffsetMins: 0,
  },
  'east-village': {
    name: 'East Village',
    borough: 'Manhattan',
    description: 'East Village, Manhattan — between 14th St and Houston, east of 3rd Ave',
    driveOffsetMins: 5,
  },
  'west-village': {
    name: 'West Village',
    borough: 'Manhattan',
    description: 'West Village, Manhattan — cobblestone streets west of 7th Ave South',
    driveOffsetMins: 0,
  },
  'tribeca': {
    name: 'Tribeca',
    borough: 'Manhattan',
    description: 'Tribeca, Manhattan — luxury loft district below Canal Street',
    driveOffsetMins: 0,
  },
  'financial-district': {
    name: 'Financial District',
    borough: 'Manhattan',
    description: 'Financial District, Manhattan — Wall Street and lower Broadway',
    driveOffsetMins: 5,
  },
  'lower-east-side': {
    name: 'Lower East Side',
    borough: 'Manhattan',
    description: 'Lower East Side, Manhattan — between the Bowery and the East River',
    driveOffsetMins: 5,
  },
  'chelsea': {
    name: 'Chelsea',
    borough: 'Manhattan',
    description: 'Chelsea, Manhattan — between 14th and 30th Streets, west of 6th Ave',
    driveOffsetMins: 0,
  },
  'gramercy-park': {
    name: 'Gramercy Park',
    borough: 'Manhattan',
    description: 'Gramercy Park, Manhattan — elegant residential neighborhood around the private park',
    driveOffsetMins: 0,
  },
  'flatiron': {
    name: 'Flatiron',
    borough: 'Manhattan',
    description: 'Flatiron District, Manhattan — around Broadway and 5th Ave near 23rd Street',
    driveOffsetMins: 0,
  },
  'murray-hill': {
    name: 'Murray Hill',
    borough: 'Manhattan',
    description: 'Murray Hill, Manhattan — residential neighborhood between 30th and 40th Streets east',
    driveOffsetMins: 0,
  },
  'midtown-manhattan': {
    name: 'Midtown Manhattan',
    borough: 'Manhattan',
    description: 'Midtown Manhattan — from 34th to 59th Street, hotels and corporate offices',
    driveOffsetMins: 0,
  },
  'hells-kitchen': {
    name: "Hell's Kitchen",
    borough: 'Manhattan',
    description: "Hell's Kitchen, Manhattan — west Midtown between 34th and 59th Streets",
    driveOffsetMins: 5,
  },
  'upper-east-side': {
    name: 'Upper East Side',
    borough: 'Manhattan',
    description: 'Upper East Side, Manhattan — from 59th to 96th Street, east of Central Park',
    driveOffsetMins: 10,
  },
  'upper-west-side': {
    name: 'Upper West Side',
    borough: 'Manhattan',
    description: 'Upper West Side, Manhattan — from 59th to 110th Street, west of Central Park',
    driveOffsetMins: 15,
  },
  'harlem': {
    name: 'Harlem',
    borough: 'Manhattan',
    description: 'Harlem, Manhattan — north of 110th Street, cultural heart of upper Manhattan',
    driveOffsetMins: 20,
  },
  'battery-park-city': {
    name: 'Battery Park City',
    borough: 'Manhattan',
    description: 'Battery Park City, Manhattan — waterfront neighborhood at the southern tip of Manhattan',
    driveOffsetMins: 5,
  },
  'nomad': {
    name: 'NoMad',
    borough: 'Manhattan',
    description: 'NoMad (North of Madison Square Park), Manhattan — design and hospitality district',
    driveOffsetMins: 0,
  },
  'williamsburg': {
    name: 'Williamsburg',
    borough: 'Brooklyn',
    description: 'Williamsburg, Brooklyn — creative neighborhood across the East River from Manhattan',
    driveOffsetMins: 15,
  },
  'dumbo': {
    name: 'DUMBO',
    borough: 'Brooklyn',
    description: 'DUMBO, Brooklyn — Down Under the Manhattan Bridge Overpass, luxury loft district',
    driveOffsetMins: 15,
  },
  'park-slope': {
    name: 'Park Slope',
    borough: 'Brooklyn',
    description: 'Park Slope, Brooklyn — tree-lined residential neighborhood adjacent to Prospect Park',
    driveOffsetMins: 20,
  },
  'brooklyn-heights': {
    name: 'Brooklyn Heights',
    borough: 'Brooklyn',
    description: 'Brooklyn Heights — historic promenade neighborhood with Manhattan views',
    driveOffsetMins: 15,
  },
  'cobble-hill': {
    name: 'Cobble Hill',
    borough: 'Brooklyn',
    description: 'Cobble Hill, Brooklyn — quiet residential enclave south of Brooklyn Heights',
    driveOffsetMins: 15,
  },
  'long-island-city': {
    name: 'Long Island City',
    borough: 'Queens',
    description: 'Long Island City, Queens — Midtown-adjacent arts and residential district',
    driveOffsetMins: -10,
  },
  'astoria': {
    name: 'Astoria',
    borough: 'Queens',
    description: 'Astoria, Queens — diverse neighborhood along the north Queens waterfront',
    driveOffsetMins: 0,
  },
  'jfk-airport': {
    name: 'JFK Airport',
    borough: 'Queens',
    description: 'John F. Kennedy International Airport — all terminals',
    driveOffsetMins: -20,
  },
  'lga-airport': {
    name: 'LaGuardia Airport',
    borough: 'Queens',
    description: 'LaGuardia Airport (LGA) — Terminal B and Terminal C',
    driveOffsetMins: -10,
  },
  'newark-airport': {
    name: 'Newark Airport',
    borough: 'New Jersey',
    description: 'Newark Liberty International Airport (EWR) — all terminals',
    driveOffsetMins: 20,
  },
};

export const hamptonDestinations: Record<string, HamptonsDestination> = {
  'southampton': {
    name: 'Southampton',
    description: 'Southampton is the classic Hamptons village — grand estates, pristine beaches, and the iconic Main Street shopping district.',
    knownFor: 'Estate homes, Gin Lane, Cooper\'s Beach, polo',
    baseTimeMin: 135,
    baseTimeMax: 165,
  },
  'east-hampton': {
    name: 'East Hampton',
    description: 'East Hampton is the Hamptons\' premier village — home to celebrity estates, world-class restaurants, and Georgica Beach.',
    knownFor: 'Main Street boutiques, Georgica Pond, celebrity estates, Nick & Toni\'s',
    baseTimeMin: 165,
    baseTimeMax: 195,
  },
  'sag-harbor': {
    name: 'Sag Harbor',
    description: 'Sag Harbor is a historic whaling village with a charming Main Street, independent bookshops, and the iconic Sag Harbor Cinema.',
    knownFor: 'Historic whaling village, Bay Street Theater, American Hotel, Long Wharf',
    baseTimeMin: 165,
    baseTimeMax: 195,
  },
  'montauk': {
    name: 'Montauk',
    description: 'Montauk is the easternmost tip of Long Island — known for surf culture, the famous Montauk Lighthouse, and an electric summer nightlife.',
    knownFor: 'Montauk Lighthouse, Gurney\'s resort, surf, Ditch Plains Beach, Ruschmeyer\'s',
    baseTimeMin: 195,
    baseTimeMax: 225,
  },
  'bridgehampton': {
    name: 'Bridgehampton',
    description: 'Bridgehampton sits between Southampton and East Hampton — known for the Bridgehampton polo club, farm stands, and quiet estate roads.',
    knownFor: 'Bridgehampton polo, Candy Kitchen diner, Peter Marino estate, farm stands',
    baseTimeMin: 150,
    baseTimeMax: 180,
  },
  'water-mill': {
    name: 'Water Mill',
    description: 'Water Mill is a quiet hamlet between Southampton and Bridgehampton, known for its historic windmill, farm stands, and low-key luxury.',
    knownFor: 'Historic water mill, farm stands, Wolffer Estate Vineyard nearby',
    baseTimeMin: 145,
    baseTimeMax: 175,
  },
  'westhampton-beach': {
    name: 'Westhampton Beach',
    description: 'Westhampton Beach is the first Hamptons stop heading east — closer to NYC, with a lively village main street and Dune Road beach access.',
    knownFor: 'Closest Hamptons village, Dune Road, Main Street restaurants, Rogers Beach',
    baseTimeMin: 110,
    baseTimeMax: 140,
  },
  'hampton-bays': {
    name: 'Hampton Bays',
    description: 'Hampton Bays offers laid-back Hamptons living with access to Shinnecock Bay, waterfront restaurants, and calm bay beaches.',
    knownFor: 'Shinnecock Bay, Ponquogue Beach, waterfront dining, Canoe Place Inn',
    baseTimeMin: 120,
    baseTimeMax: 150,
  },
  'amagansett': {
    name: 'Amagansett',
    description: 'Amagansett sits just east of East Hampton — a quieter, artsy village known for the famous Lobster Roll restaurant and Indian Wells Beach.',
    knownFor: 'Indian Wells Beach, The Lobster Roll (Lunch), Amagansett Farmer\'s Market',
    baseTimeMin: 175,
    baseTimeMax: 210,
  },
};

export type HamptonsRouteData = {
  originSlug: string;
  destSlug: string;
  origin: HamptonsOrigin;
  destination: HamptonsDestination;
  driveTimeMin: number;
  driveTimeMax: number;
  driveTimeLabel: string;
};

export function parseHamptonsSlug(slug: string): HamptonsRouteData | null {
  for (const originSlug of Object.keys(hamptonOrigins)) {
    const prefix = `${originSlug}-to-`;
    if (slug.startsWith(prefix)) {
      const rest = slug.slice(prefix.length).replace(/-car-service$/, '');
      if (hamptonDestinations[rest]) {
        const origin = hamptonOrigins[originSlug];
        const destination = hamptonDestinations[rest];
        const driveMin = destination.baseTimeMin + origin.driveOffsetMins;
        const driveMax = destination.baseTimeMax + origin.driveOffsetMins;
        const toLabel = (mins: number) => {
          const h = Math.floor(mins / 60);
          const m = mins % 60;
          return m === 0 ? `${h}h` : `${h}h ${m}min`;
        };
        return {
          originSlug,
          destSlug: rest,
          origin,
          destination,
          driveTimeMin: driveMin,
          driveTimeMax: driveMax,
          driveTimeLabel: `${toLabel(driveMin)}–${toLabel(driveMax)}`,
        };
      }
    }
  }
  return null;
}

export function getAllHamptonsRouteSlugs(): string[] {
  const slugs: string[] = [];
  for (const originSlug of Object.keys(hamptonOrigins)) {
    for (const destSlug of Object.keys(hamptonDestinations)) {
      slugs.push(`${originSlug}-to-${destSlug}-car-service`);
    }
  }
  return slugs;
}
