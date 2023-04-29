import ProfileAuthModal from './ProfileAuthModal';
import ProfileDetails from './ProfileDetails';
import ProfileFavProducts from './ProfileFavProducts';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { AnimatePresence } from 'framer-motion';

const Profile = () => {
	const {
		isProfileAuthModalShown,
		isProfileDetailsShown,
		isProfileFavProductsShown,
	} = useAppSelector((state) => state.navigation);

	return (
		<>
			<AnimatePresence>
				{isProfileAuthModalShown && <ProfileAuthModal />}
			</AnimatePresence>

			<AnimatePresence>
				{isProfileDetailsShown && <ProfileDetails />}
			</AnimatePresence>

			<AnimatePresence>
				{isProfileFavProductsShown && <ProfileFavProducts />}
			</AnimatePresence>
		</>
	);
};

export default Profile;
