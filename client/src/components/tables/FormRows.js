// import React, { useState } from "react";
// import { useHistory } from "react-router";
// import { Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
// import { EditButton } from "../buttons/EditButton";
// import "./FormRows.css";

// export const HeaderRow = ({ label, setEdit }) => (
//   <tr>
//     <td align="right" colSpan="2">
//       <div className="d-flex flex-row align-items-center justify-content-between">
//         <h4>{label}</h4>
//         {setEdit ? <EditButton setEdit={setEdit} /> : null}
//       </div>
//     </td>
//   </tr>
// );

// export const SubmitRow = ({ back, full }) => {
//   const history = useHistory();
//   const onBack = back || history.goBack;
//   return (
//     <tr>
//       <td
//         colSpan="2"
//         align="right"
//         className={full && "d-flex justify-content-between"}
//       >
//         <Button
//           style={full ? { width: "48%" } : { marginRight: "10px" }}
//           variant="secondary"
//           onClick={onBack}
//         >
//           Отмена
//         </Button>
//         <Button
//           style={full && { width: "48%" }}
//           variant="success"
//           type="submit"
//         >
//           Сохранить
//         </Button>
//       </td>
//     </tr>
//   );
// };

// export const ButtonRow = ({ label, onClick, open }) => (
//   <tr className="pointer">
//     <td colSpan="2" onClick={onClick}>
//       {label}{" "}
//       {open !== undefined && (
//         <FontAwesomeIcon icon={!open ? faCaretDown : faCaretUp} />
//       )}
//     </td>
//   </tr>
// );

// export const InputRow = ({ label, value, onChange, placeholder }) => (
//   <tr>
//     <td>{label}</td>
//     <td>
//       <input
//         style={{ height: "20px" }}
//         placeholder={placeholder}
//         className="w-100"
//         onChange={(e) => onChange(e.target.value)}
//         value={value}
//       />
//     </td>
//   </tr>
// );

// export const SimpleRow = ({ label, value, placeholder }) => (
//   <tr>
//     <td>{label}</td>
//     <td>
//       {value} {placeholder}
//     </td>
//   </tr>
// );

// export const TextAreaRow = ({
//   label,
//   value,
//   onChange,
//   rows = 4,
//   placeholder,
// }) => (
//   <>
//     <tr>
//       <td colSpan="2">{label}</td>
//     </tr>
//     <tr>
//       <td colSpan="2">
//         <textarea
//           placeholder={placeholder}
//           rows={rows}
//           className="w-100"
//           onChange={(e) => onChange(e.target.value)}
//           value={value}
//         />
//       </td>
//     </tr>
//   </>
// );

// export const NumberRow = ({ label, value, onChange }) => (
//   <tr>
//     <td>{label}</td>
//     <td>
//       <input
//         type="number"
//         min={0}
//         style={{ height: "20px", width: "50px", textAlign: "right" }}
//         onChange={(e) => onChange(+e.target.value)}
//         value={value}
//       />
//     </td>
//   </tr>
// );

// export const SelectRow = ({ label, array, onChange, value, nullable }) => {
//   const getIndex = () => {
//     let i = array.indexOf(value);
//     if (i === -1)
//       i = array.findIndex((el) => el === value || el.id === value.id);
//     return i;
//   };
//   return (
//     <tr>
//       <td>{label}</td>
//       <td>
//         <select
//           value={getIndex()}
//           onChange={(e) => onChange(array[e.target.value] || {})}
//           className="input"
//         >
//           {nullable && <option value={-1}>Пусто</option>}
//           {/* {array.map((el, i) => (
//             <option value={i}>{el.label || el.ru || el.name || el}</option>
//           ))} */}
//         </select>
//       </td>
//     </tr>
//   );
// };

// export const RadioGroupRow = ({ label, value, array, onChange }) => (
//   <tr>
//     <td>{label}</td>
//     {/* <td className="d-flex flex-wrap">
//       {array.map((el) => (
//         <form className="d-flex flex-row">
//           <input
//             id={el.value}
//             name={el.value}
//             type="radio"
//             checked={el.value === value}
//             className="m-2"
//             onChange={(e) => onChange(e.target.value)}
//             value={el.value}
//           />
//           <div className="m-1">{el.label}</div>
//         </form>
//       ))}
//     </td> */}
//   </tr>
// );

// export const CheckListRow = ({
//   label,
//   array,
//   onChange,
//   isInArray,
//   total,
//   limit,
// }) => {
//   const [open, setOpen] = React.useState(false);
//   const isInLimit = total && limit ? total < limit : true;

//   const limitValidate = (el) => {
//     if (isInLimit) return onChange(el);
//     if (isInArray(el)) return onChange(el);
//   };

//   return (
//     <>
//       <tr className="pointer">
//         <td colSpan="2" onClick={() => setOpen(!open)}>
//           <div className="d-flex flex-row justify-content-between">
//             <div>
//               {label} <FontAwesomeIcon icon={!open ? faCaretDown : faCaretUp} />
//             </div>
//             {limit && total ? (
//               <div>
//                 {total}/{limit}
//               </div>
//             ) : null}
//           </div>
//         </td>
//       </tr>
//       {open &&
//         array?.map((el) => (
//           <tr
//             className="pointer"
//             key={el.id}
//             onClick={() => limitValidate(el)}
//             style={
//               isInArray(el)
//                 ? { fontSize: "14px", color: "white", fontWeight: "bold" }
//                 : { fontSize: "14px", color: "gray" }
//             }
//           >
//             <td>{el.title}</td>
//             <td>{el.description}</td>
//           </tr>
//         ))}
//     </>
//   );
// };

// export const InventoryCategory = ({ category, setItem }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <div className="pointer mt-2 mb-2" onClick={() => setOpen(!open)}>
//         <b>
//           {category.ru}{" "}
//           {open !== undefined && (
//             <FontAwesomeIcon icon={!open ? faCaretDown : faCaretUp} />
//           )}
//         </b>
//       </div>
//       {/* {open &&
//         category.items.map((item) => (
//           <div
//             style={{ fontSize: "14px" }}
//             className="pointer"
//             onClick={() => setItem(item)}
//           >
//             - {item.name}
//           </div>
//         ))} */}
//     </>
//   );
// };

// export const InventoryItem = ({ itemWrap, setItem, changeItemCount }) => (
//   <div className="d-flex flex-row align-items-center justify-content-between">
//     <div className="pointer" onClick={() => setItem(itemWrap.item)}>
//       {itemWrap.item.name}
//     </div>
//     <div>
//       <input
//         type="number"
//         style={{ height: "20px", width: "50px", textAlign: "right" }}
//         value={itemWrap.quantity}
//         onChange={(e) => changeItemCount(itemWrap.item.id, +e.target.value)}
//       />
//     </div>
//   </div>
// );
