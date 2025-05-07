import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="px-6 relative flex flex-row justify-between h-24 items-center bg-main-verylight">
    
        <Logo />

        <Navbar />

    </div>
  )
}
