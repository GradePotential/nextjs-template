import { z } from 'zod';

export const ZPlanet = z.object({ name: z.string().nonempty() });
