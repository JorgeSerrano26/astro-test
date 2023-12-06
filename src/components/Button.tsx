type Props = {
    id: string;
    children: React.ReactNode;
};

const Button = ({ id, children }: Props) => {
    return (
        <button id={id}>
            {children}
        </button>
    );
}

export default Button;