import { useState } from "react";
import styles from "./CheckBox.module.css";

interface Props {
  label: string,
  checked?: boolean,
  onTaskDone: () => void
}

export function CheckBox({ label, checked, onTaskDone,...props }: Props){
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    return (
        <div className={styles.checkboxWrapper}>
          <label>
            <input 
                type="checkbox"  
                checked={isChecked}
                onChange={() => {
                    setIsChecked((prev) => !prev)
                    onTaskDone()
                    }
                  }
                className={isChecked ? styles.checked : ""}
                {...props}
            />
            <span className={isChecked ? styles.labelChecked : styles.labelTodo}>{label}</span>
          </label>
  
        </div>
      );
}