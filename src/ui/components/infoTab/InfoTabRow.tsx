/**
 * Component to display a row in the info tab
 */
const InfoTabRowComponent = ({ title, content }: { title: string, content: string }) => (
    <div className="flex flex-row">
      <div className="info-entry-title w-[100px] md:w-[228px]">{title}</div>
      <div>{content}</div>
    </div>
);

export default InfoTabRowComponent;
