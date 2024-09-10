/**
 * View to display friend details.
 */
import "../../styles/views/friendDetails.scss";
import React, { useEffect, useState } from 'react';
import { setShowBackBtn } from '../../lib/store/layoutSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../lib/store';
import { useParams } from 'react-router-dom';
import { getFriendDetails } from '../../lib/api/friends';
import { IFriend, IFriendDetails } from '../../lib/types';
import AvatarComponent from "../../ui/components/avatar/Avatar";
import TabsComponent from "../../ui/components/tabs/tabs";
import InfoTabComponent from "../../ui/components/infoTab/InfoTab";
import LoadingSpinnerComponent from "../../ui/components/loadingSpinner/LoadingSpinner";
import PhotosTabComponent from "../../ui/components/photosTab/PhotosTab";
import BackButtonComponent from "../../ui/components/backButton/BackButton";

const FriendDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const friends = useSelector<IRootState, IFriend[]>((state: IRootState) => state.friends.friends);
  const [targetFriend, setTargetFriend] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [friendDetails, setFriendDetails] = useState<IFriendDetails | undefined>();
  const dispatch = useDispatch();


  /* Friend details will show the back button */
  useEffect(() => {
    dispatch(setShowBackBtn(true));
  }, [dispatch]);

  /* Fetch friend details from the API */
  useEffect(() => {
    setIsLoading(true);

    /* Find the index of the target friend */
    const targetIdx = friends.findIndex((friend) => friend.id === parseInt(id!));
    setTargetFriend(targetIdx);

    const fetchFriendDetails = async () => {
      const data = await getFriendDetails(id!);
      setFriendDetails(data);
      setIsLoading(false);
    };
    fetchFriendDetails();
  }, [id, dispatch, friends]);


  return (
    <div className="h-full flex flex-row">
      <div className="hidden lg:flex">
        <BackButtonComponent />
      </div>
      <div className="box-container lg:ml-20 lg:mr-[124px] p-[60px] grow relative">
        <div className="lg:hidden flex absolute top-[8px] left-[8px]">
          <BackButtonComponent />
        </div>
        <div className="flex flex-col w-full h-full">
          {isLoading ? <LoadingSpinnerComponent /> : <>
            <AvatarComponent size="big" friend={friends[targetFriend]} />
            <div className="friend-details-name">{friends[targetFriend].first_name} {friends[targetFriend].last_name}</div>
            <div className="box-status mt-2.5">{friends[targetFriend].status}</div>
            <TabsComponent className="mt-[30px] grow overflow-y-auto" tabs={["Info", "Photos"]} childrens={[<InfoTabComponent details={friendDetails!} />, <PhotosTabComponent details={friendDetails!} />]} />
          </>}
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
