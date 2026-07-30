import OurStory from '@/widgets/About/OurStory'
import Achievement from '@/widgets/About/Achievement'
import Person from '@/widgets/About/Person'
import Additionally from '@/widgets/About/Additionally'
import './About.scss'


function AboutPage()
{
  return(
    <main className="pading container About">
      <OurStory />
      <Achievement />
      <Person />
      <Additionally />
    </main>
  )
}

export default AboutPage