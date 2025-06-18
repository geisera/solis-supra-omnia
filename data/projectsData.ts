interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Another Bug Hunt',
    description: `When Kestrel Station’s comms go dark and her crew lies butchered, Captain Tessa Rourke volunteers for a mission nobody else will touch—hunt down the alien hives responsible. 
    Armed with experimental combat armor, a crack squad of misfits, and a dwindling supply of patience, she crashes into the swarm’s darkest lair. 
    
    No reinforcements. No backup plan. Just blaster fire and guts.
    As Rourke pushes deeper into the tunnels, the bugs adapt. 
    Their acid spits smarter, their claws strike faster—and every fallen comrade turns the margin for error to zero. 
    To succeed, she must confront the horror that made her a widow, master a weapon she barely understands, and choose between vengeance and the spark of hope she carries for humanity’s survival.
    Brace for relentless action, ruthless tactics, and a final showdown where only one species walks away. Another Bug Hunt: join the fight, pray you live long enough to tell the tale.`,
    imgSrc: '/static/images/bug-hunt.png',
    href: 'https://soldefensecorps.com',
  },
]

export default projectsData
