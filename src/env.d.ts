/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Weglot {
  initialize(options: { api_key: string; [key: string]: any }): void;
}

declare var Weglot: Weglot;
