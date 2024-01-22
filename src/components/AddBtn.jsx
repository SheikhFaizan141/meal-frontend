import { Box, Button, ButtonGroup } from "@mui/material";

export default function AddButton({ count , handleClick, handleDecrement, handleIncrement }) {
    return (
        <>
            {
                count > 0
                    ?
                    <div className="btn-add-quantity">
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                            size="small"
                            sx={{ alignItems: "center" }}
                            className="m"
                            color="secondary"
                        >
                            <Button onClick={handleDecrement}>-</Button>
                            <div className="add-count-ui">{count}</div>
                            <Button onClick={handleIncrement}>+</Button>
                        </ButtonGroup>
                    </div>
                    :
                    <Button color="secondary" onClick={handleClick} variant="contained" size="small">Add</Button>
            }
        </>
    )
}