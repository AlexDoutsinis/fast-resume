type Profile = {
  fullName: string
  subtitle: string
  profileSummary: string
}

export type Props = {
  profile: Profile
  setProfile: (value: Profile) => void
}
