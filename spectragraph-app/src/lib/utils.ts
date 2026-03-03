import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isMac = typeof window !== 'undefined' ? navigator.platform.toUpperCase().indexOf('MAC') >= 0 : false;

export function hexToRgba(hex: string, alpha: number) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt("0x" + hex[1] + hex[1]);
    g = parseInt("0x" + hex[2] + hex[2]);
    b = parseInt("0x" + hex[3] + hex[3]);
  } else if (hex.length === 7) {
    r = parseInt("0x" + hex[1] + hex[2]);
    g = parseInt("0x" + hex[3] + hex[4]);
    b = parseInt("0x" + hex[5] + hex[6]);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function capitalizeFirstLetter(string: string) {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getDagreLayoutedElements(nodes: any[], edges: any[], options: any) {
  return { nodes, edges };
}

export function deepObjectDiff(o1: any, o2: any) {
  return {};
}

export function flattenObj(obj: any) {
  return {};
}

export function getFlowDagreLayoutedElements(nodes: any[], edges: any[], options: any) {
  return { nodes, edges };
}
