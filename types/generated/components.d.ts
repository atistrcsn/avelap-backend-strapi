import type { Schema, Attribute } from '@strapi/strapi';

export interface KarbantartasKarbantartas extends Schema.Component {
  collectionName: 'components_karbantartas_karbantartas';
  info: {
    displayName: 'Karbantart\u00E1s';
    icon: 'clock';
  };
  attributes: {
    isEnabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.String & Attribute.Required;
    desc: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    startDateTime: Attribute.DateTime;
    endDateTime: Attribute.DateTime;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'karbantartas.karbantartas': KarbantartasKarbantartas;
    }
  }
}
