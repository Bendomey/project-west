import * as React from "react";

interface dataProps {
  title: string;
  description: string;
}

const data: dataProps[] = [
  {
    title: "Supervised Contact",
    description:
      "Supervised Contact is defined as: A service where contact takes place in the constant presence of a trained person with the direct responsibility to observe and ensure the safety of those involved. Supervised contact not only ensures the physical safety but also the emotional wellbeing of a child when risks have been identified. It also assists in building and sustaining positive relationships between a child and members of their non-resident family. During Supervised contact, the contact supervisor stays in sight and sound of the child at all times making notes of what happens during contact. These notes will be made available to the referrer who shares them with the other party and with the court if applicable. Contact Supervisors aim to provide a written report of each supervised contact session within 7 – 10 working days.",
  },
  {
    title: "Escorted Contact",
    description:
      "Escorted Contact is introduced once a regular, safe and sustainable pattern of contact has been established within a child contact centre or elsewhere, involving the child and non-resident parent (or other family member(s)) being accompanied on visits to places such as local parks, shops and restaurants being supervised by a Contact Supervisor. We will ensure that the transport arrangements and places being visited are both safe and meet the needs of the child involved in the contact. We will also prepare and submit a report.",
  },
  {
    title: "Supported Contact",
    description:
      "Supported Contact take place in one of our warm welcoming contact rooms where children can spend time with the parent they do not live with and sometimes with other family members. Our contact rooms are full of toys, games, books and crafts to keep children entertained. Staff members are on hand to oversee the sessions and offer support and guidance where appropriate; however, supported contact is not closely monitored and written feedback is not given. We only provide a record of attendance.",
  },
  {
    title: "Handover",
    description:
      "This is where we undertake or supervised the handover of children from one parent or carer to another. This is normally used when one of the parties feels a risk or uncomfortable about seeing each other; however there is no risk to the child but the parent requires a neutral person to be present. For more complex cases we maybe also able to provide a full handover service, collecting and transporting a child door to door (subject to the availability of staff).",
  },
  {
    title: "Indirect Contact",
    description:
      "Indirect Contact is used where direct contact is either unsafe, unworkable and or not in the Childs best interests. Contact can be in the form of letters, cards, gifts or emails through our centre. It usually initially takes place over a six month period with an option to extend it to twelve months if required or what has been agreed by the parties or court ordered. This form of contact is often used to re-introduce a child to a non-resident parent they have not seen for a long period of time or there are concerns about domestic violence; child abuse or where a child has been adopted.",
  },
];

const ChildrenContactService = () => {
  const [showDrowpdown, setShowDropdown] = React.useState<number | null>(null);
  return (
    <React.Fragment>
      <div className={"grid grid-cols-8 gap-8"}>
        <div
          className={
            "col-span-8 sm:col-span-8 md:col-span-5 order-2 sm:order-2 md:order-1"
          }
        >
          {data.map((service: dataProps, i: number) => (
            <React.Fragment key={i}>
              <SingleService
                onClick={() => {
                  setShowDropdown(showDrowpdown === i ? null : i);
                }}
                show={showDrowpdown === i}
                title={service?.title}
                description={service?.description}
              />
            </React.Fragment>
          ))}
        </div>
        <div
          className={
            "col-span-8 sm:col-span-8 md:col-span-3 order-1 sm:order-1 md:order-2"
          }
        >
          <div className={"sticky top-1"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fibonacci-commerce.appspot.com/o/childrencontactservice.jpg?alt=media&token=cd2b2612-131d-460f-9b5a-a2a2950c0698"
              className={"h-auto w-full"}
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

interface SingleServiceProps {
  onClick: () => void;
  show: boolean;
  title: string;
  description: string;
}

const SingleService: React.FC<SingleServiceProps> = ({
  onClick,
  show,
  title,
  description,
}) => {
  return (
    <React.Fragment>
      <div className={"mb-3"}>
        <div
          onClick={onClick}
          className={
            "py-3 px-5 bg-gray-100 flex flex-row justify-between items-center cursor-pointer"
          }
        >
          <div>{title}</div>
          <div>
            <svg
              className={"h-5 w-5 text-gray-500"}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {show && (
          <div className={"p-2 border border-gray-200"}>{description}</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ChildrenContactService;
