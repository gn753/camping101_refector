import moment from "moment";
import { useState } from "react";

export default function DatePicker() {
  const [selected, setSelected] = useState("");
  const today = moment();
  const threeMonthsLater = moment(today).add(3, "months");

  return <div />;
}
