import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";

const navList = [
	"Dashboard",
	"Item 1",
	"Item 2",
	"Item 3",
	"Item 4",
	"Item 5",
	"Item 6",
	"Item 7",
	"Item 8",
];

// try the router mock approach

const useRouter = jest.spyOn(require("next/router"), "useRouter");

test("renders the Sidebar component", () => {
	// mock a return value on useRouter
	useRouter.mockImplementation(() => ({
		useRouter() {
			return {
				route: "/",
				pathname: "",
				query: "",
				asPath: "",
				push: jest.fn(),
			};
		},
	}));

	render(<Sidebar openNav={true} setOpenNav={jest.fn()} />);

	// Test if each sidebar item renders
	navList.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());

	// Test if each user's profile picture renders
	expect(screen.getAllByAltText("profile picture")[0]).toBeInTheDocument();
});
