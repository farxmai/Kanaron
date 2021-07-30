// /* eslint-disable object-curly-newline */
// import React, { useState } from "react";
// import { Table } from "react-bootstrap";
// import { Mutation } from "@apollo/client";
// import { useHistory } from "react-router";
// import {
//   attributesTranslate,
//   skillTypesTranslate,
// } from "../../../components/translate/dictionary";
// import {
//   HeaderRow,
//   InputRow,
//   NumberRow,
//   TextAreaRow,
//   SubmitRow,
//   RadioGroupRow,
//   ButtonRow,
// } from "../../../components/tables/FormRows";
// import {
//   UPDATE_SKILL_MUTATION,
//   CREATE_SKILL_MUTATION,
// } from "../../../qql/SkillQuery";

// const SkillEdit = ({ data, setEdit }) => {
//   const [title, setTitle] = useState(data?.title || "");
//   const [type, setType] = useState(data?.type || "");
//   const [cost, setCost] = useState(data?.cost || 0);
//   const [description, setDescription] = useState(data?.description || "");

//   const history = useHistory();

//   const prepareRequestData = (id) => {
//     return {
//       id,
//       title,
//       type,
//       description,
//       cost,
//     };
//   };

//   const skillTypes = skillTypesTranslate.map((el) => ({
//     value: el.eng,
//     label: el.ru,
//   }));

//   const fields = [
//     {
//       label: "Название",
//       component: InputRow,
//       value: title,
//       onChange: setTitle,
//     },
//     {
//       label: "Общее описание",
//       component: TextAreaRow,
//       value: description,
//       onChange: setDescription,
//     },
//     {
//       label: "Тип",
//       component: RadioGroupRow,
//       value: type,
//       onChange: setType,
//       array: skillTypes,
//     },
//     {
//       label: "Очки действий",
//       component: NumberRow,
//       value: cost,
//       onChange: setCost,
//     },
//   ];

//   return (
//     <Mutation
//       mutation={data?.id ? UPDATE_SKILL_MUTATION : CREATE_SKILL_MUTATION}
//       variables={prepareRequestData(data?.id)}
//       onCompleted={(res) => history.push(`/skills/${res.addSkill.id}`)}
//       onError={(err) => console.log(err)}
//     >
//       {(mutation) => (
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             mutation();
//           }}
//         >
//           <Table striped bordered hover variant="dark">
//             <thead>
//               {setEdit ? (
//                 <HeaderRow label="Редактирование" setEdit={setEdit} />
//               ) : (
//                 <HeaderRow label="Создание" />
//               )}
//             </thead>
//             <tbody>
//               {/* {fields.map(
//                 ({ label, component: Component, value, onChange, array }) => (
//                   <Component
//                     label={label}
//                     onChange={onChange}
//                     value={value}
//                     array={array}
//                   />
//                 )
//               )} */}
//               <SubmitRow back={setEdit} />
//             </tbody>
//           </Table>
//         </form>
//       )}
//     </Mutation>
//   );
// };

// export default SkillEdit;
