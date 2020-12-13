import Link from 'next/link';

const Nav = () =>(
    <div>
        <Link href="/sell">
            <a>Go to sell</a>
         </Link>
        <Link href="/">
            <a>Go to home!</a>
        </Link>
    </div>
)
export default Nav;