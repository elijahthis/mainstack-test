import { BiLoaderCircle } from "react-icons/bi";
import styles from "./styles.module.scss";

const Loader = () => {
	return (
		<div
			className={`${styles.Loader} pt-24 grid place-items-center`}
			data-testid="loader"
		>
			<BiLoaderCircle color="#FF5403" size={24} />
		</div>
	);
};

export default Loader;
