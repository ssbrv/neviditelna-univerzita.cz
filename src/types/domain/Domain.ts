export interface DNS {
  name: string;
  ip_address: string;
}

export interface NSSet {
  handle: string;
  registrar: string;
  dns: DNS[];
}

export interface KeySet {
  handle: string;
  registrar: string;
  dns_keys: string[];
}

export interface Publish {
  organization: boolean;
  name: boolean;
}

export interface Owner {
  handle: string;
  organization: string;
  name: string;
  publish: Publish;
}

export interface Contact {
  handle: string;
  organization: string;
  name: string;
  publish: Publish;
}

export interface Event {
  timestamp: string;
  registrar_handle: string;
}

export interface Events {
  registered: Event;
  transferred: Event;
  updated: Event;
  unregistered: Event | null;
}

export interface StateFlag {
  name: string;
  active: boolean;
  description: string;
}

export interface StateFlags {
  flags: StateFlag[];
  groups: string[][];
}

export interface DomainDetail {
  fqdn: string;
  nsset: NSSet;
  keyset: KeySet;
  owner: Owner;
  sponsoring_registrar: string;
  administrative_contacts: Contact[];
  expires_at: string;
  events: Events;
  state_flags: StateFlags;
}

export interface Domain {
  id: string;
  fqdn: string;
}
