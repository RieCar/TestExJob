import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../app/models/store";
import { getAllByOrg } from "../../Features/reduccontact/contactactions";
import { IContact, IContacts } from "../../app/models/contact";

const Contact: React.FC = () => {
  const currentUserOrganization = useSelector(
    (store: IStore) => store.currentUser?.data.organisation
  );

  const currentContacts = useSelector((store: IStore) => store.currentContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUserOrganization) {
      dispatch(getAllByOrg(currentUserOrganization));
    }
  }, [currentUserOrganization]);

  function ContactList(props: any) {
    console.log("props", props.current.data);
    var contList = props.current;
    const listofcont = (
      <div>
        <ul>
          {contList?.map((item: IContact) => (
            <li className="contact_item" key={item.id}>
              <p>Namn: {item.fullName}</p>
              <p>Titel: {item.titel}</p>
              <p>Tel.: {item.phoneNumber} </p>
              <p>Email: {item.email} </p>
            </li>
          ))}
        </ul>
      </div>
    );
    return <div>{listofcont} </div>;
  }
  console.log("currentcontacts", currentContacts);
  return (
    <div>
      <h3> Kontakter</h3>
      {currentContacts && currentContacts[0]?.fullName ? (
        <ContactList current={currentContacts} />
      ) : (
        <p> Inga kontakter</p>
      )}
    </div>
  );
};

export default Contact;
