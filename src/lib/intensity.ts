export const intensityModes = ['quiet', 'expressive', 'immersive'] as const;

export type IntensityMode = (typeof intensityModes)[number];

export function isQuietSurface(
  kind: 'form' | 'auth' | 'payment' | 'privacy' | 'destructive' | 'brand' | 'editorial',
): boolean {
  switch (kind) {
    case 'form':
    case 'auth':
    case 'payment':
    case 'privacy':
    case 'destructive':
      return true;
    case 'brand':
    case 'editorial':
      return false;
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}
