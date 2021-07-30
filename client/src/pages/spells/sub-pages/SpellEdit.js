// /* eslint-disable object-curly-newline */
// import React, { useState } from "react";
// import { Table } from "react-bootstrap";
// import { Mutation } from "@apollo/client";
// import { useHistory } from "react-router";
// import { spellTypesTranslate } from "../../../components/translate/dictionary";
// import {
//   HeaderRow,
//   InputRow,
//   NumberRow,
//   TextAreaRow,
//   SubmitRow,
//   RadioGroupRow,
// } from "../../../components/tables/FormRows";
// import {
//   UPDATE_SPELL_MUTATION,
//   CREATE_SPELL_MUTATION,
// } from "../../../qql/SpellQuery";
// import { dices } from "../../../constants/dices";

// const SpellEdit = ({ data, setEdit }) => {
//   const [title, setTitle] = useState(data?.title || "");
//   const [type, setType] = useState(data?.type || "");
//   const [cost, setCost] = useState(data?.cost || 0);
//   const [cast, setCast] = useState(data?.cast || 0);
//   const [level, setLevel] = useState(data?.level || 0);
//   const [concentration, setConcentration] = useState(data?.concentration || 0);
//   const [description, setDescription] = useState(data?.description || "");
//   const [effect, setEffect] = useState(data?.effect || "");
//   const [family, setFamily] = useState(data?.family || "");
//   const [dice, setDice] = useState(data?.dice || 0);
//   const [diceCount, setDiceCount] = useState(data?.diceCount || 0);

//   const history = useHistory();

//   const prepareRequestData = (id) => {
//     return {
//       id,
//       title,
//       type,
//       description,
//       family,
//       effect,
//       cost,
//       cast,
//       level,
//       concentration,
//       dice,
//       diceCount,
//     };
//   };

//   const spellTypes = spellTypesTranslate.map((el) => ({
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
//       label: "Школа заклинания",
//       component: InputRow,
//       value: family,
//       onChange: setFamily,
//     },
//     {
//       label: "Общее описание",
//       component: TextAreaRow,
//       value: description,
//       onChange: setDescription,
//     },
//     {
//       label: "Еффект",
//       component: TextAreaRow,
//       value: effect,
//       onChange: setEffect,
//     },
//     {
//       label: "Тип",
//       component: RadioGroupRow,
//       value: type,
//       onChange: setType,
//       array: spellTypes,
//     },
//     {
//       label: "Уровень заклинания",
//       component: NumberRow,
//       value: level,
//       onChange: setLevel,
//     },
//     {
//       label: "Уровень концентрации",
//       component: NumberRow,
//       value: concentration,
//       onChange: setConcentration,
//     },
//     {
//       label: "Скорость каста",
//       component: NumberRow,
//       value: cast,
//       onChange: setCast,
//     },
//     {
//       label: "Очки маны",
//       component: NumberRow,
//       value: cost,
//       onChange: setCost,
//     },
//     {
//       label: "Dice",
//       component: RadioGroupRow,
//       value: dice,
//       onChange: (d) => setDice(+d),
//       array: dices,
//     },
//     {
//       label: "Dice Count",
//       component: NumberRow,
//       value: diceCount,
//       onChange: setDiceCount,
//     },
//   ];

//   return (
//     <Mutation
//       mutation={data?.id ? UPDATE_SPELL_MUTATION : CREATE_SPELL_MUTATION}
//       variables={prepareRequestData(data?.id)}
//       onCompleted={(res) =>
//         history.push(`/spells/${data?.id || res.addSpell.id}`)
//       }
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

// export default SpellEdit;
