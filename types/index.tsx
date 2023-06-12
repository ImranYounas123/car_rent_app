export interface customBtnprops {
    title: string,
    btnType?: "button" | "submit",
    containerStyle?: string
}
export interface OptionProps {
    title: string;
    value: string;
}
export interface customFilterProps {
    title: string,
    options: OptionProps[],
}
export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}
export interface homeProps {
    searchParams: FilterProps
}