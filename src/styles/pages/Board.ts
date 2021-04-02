import { BiHomeAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

import styled from "styled-components";

import { Colors } from "assets/colors";

export const Container = styled.main<{ background?: string }>`
	> section {
		position: relative;
		min-height: 100vh;
		height: 100vh;
		max-height: 100vh;
		background: ${({ background }) => background && `url(${background})`};
		background-position: center;
		background-size: cover;
		z-index: 1;

		&::before {
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			content: "Kanban";
			display: flex;
			align-items: center;
			justify-content: center;
			color: ${`${Colors.white}90`};
			font-size: 15.625em;
			font-weight: bold;
			z-index: -1;
		}

		> header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 5.2rem;
			padding: 1rem 0.5rem;
			z-index: 1;

			> div {
				display: flex;
				align-items: center;

				> a {
					display: flex;
					align-items: center;
					justify-content: center;
					background: ${Colors["background-icon-container"]};
					color: ${Colors.primary};
					border-radius: 3px;
					outline: transparent;
					padding: 0.7rem;
					margin: 0 0.5rem;
					transition: background-color 0.2s ease;
					cursor: pointer;

					&:hover,
					&:focus,
					&:active {
						background: ${Colors["background-icon-container-hover"]};
					}
				}
			}
		}
	}
`;

export const HomeIcon = styled(BiHomeAlt)`
	width: 2.4rem;
	height: 2.4rem;
	margin: -0.1rem;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${Colors["background-title"]};
	color: ${Colors.primary};
	border-radius: 3px;
	outline: transparent;
	padding: 0.7rem 1.25rem;

	> h1 {
		font-size: 1.8rem;
	}
`;

export const SettingsIcon = styled(FiSettings)`
	width: 2.25rem;
	height: 2.25rem;
`;
