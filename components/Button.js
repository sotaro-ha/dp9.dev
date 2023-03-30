import Link from "next/link";
export default function Button(props) {
    return (
        <div className="text-right w-full my-8 ">
            <Link
                className="bg-primary text-white text-sm font-bold py-2 px-4 rounded-full "
                href={props.href}
            >
                {props.text}&nbsp;&nbsp;→
            </Link>
        </div>
    );
}