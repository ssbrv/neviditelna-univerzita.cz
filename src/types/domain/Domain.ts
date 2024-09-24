export interface DNS {
  name: string
  ip_address: string
}

export interface DomainNSSet {
  handle: string
  registrar: string
  dns: DNS[]
}

export interface DomainKeySet {
  handle: string
  registrar: string
  dns_keys: string[]
}

export interface DomainPublish {
  organization: boolean
  name: boolean
}

export interface DomainContact {
  handle: string
  organization: string
  name: string
  publish: DomainPublish
}

export interface DomainEvent {
  timestamp: string
  registrar_handle: string
}

export interface DomainEvents {
  registered: DomainEvent
  transferred: DomainEvent
  updated: DomainEvent
  unregistered?: DomainEvent
}

export interface DomainStateFlag {
  name: string
  active: boolean
  description: string
}

export interface DomainStateFlags {
  flags: DomainStateFlag[]
  groups: string[][]
}

export interface DomainDetails {
  fqdn: string
  nsset: DomainNSSet
  keyset: DomainKeySet
  owner: DomainContact
  sponsoring_registrar?: string
  administrative_contacts?: DomainContact[]
  expires_at: string
  events: DomainEvents
  state_flags: DomainStateFlags
}

export interface Domain {
  id: string
  fqdn: string
}
