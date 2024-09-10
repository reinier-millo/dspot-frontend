/**
 * Friend details info tab component
 */
import "../../../styles/components/infoTab.scss";
import { IFriendDetails } from "../../../lib/types";
import InfoTabRowComponent from "./InfoTabRow";

const InfoTabComponent = ({ details }: { details: IFriendDetails }) => {
  return (
    <div>
      <div className="info-entry-title">Bio:</div>
      <div className="info-entry-content mt-2.5">{details.bio}</div>
      <hr className="info-separator md:w-[424px] mx-auto my-[25px]" />
      <InfoTabRowComponent title="Phone:" content={details.phone} />
      <hr className="info-separator md:w-[424px] mx-auto my-[25px]" />
      <div className="flex flex-col gap-3.5">
        <InfoTabRowComponent title="Address:" content={details.address_1} />
        <InfoTabRowComponent title="City:" content={details.city} />
        <InfoTabRowComponent title="State:" content={details.state} />
        <InfoTabRowComponent title="Zipcode:" content={details.zipcode} />
        <InfoTabRowComponent title="State:" content={details.state} />
      </div>
    </div>
  )
}

export default InfoTabComponent;
