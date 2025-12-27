import { ThemeToggle } from "../components/Themetoggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* {team toggle}  */}

        <ThemeToggle />


        {/* {background effects} */}
        <StarBackground />

        {/* {nav bar} */}
        <NavBar />

        {/* main content */}
        <main>
            <HeroSection />
        </main>

        {/* {footer} */}
          
    </div>;
}