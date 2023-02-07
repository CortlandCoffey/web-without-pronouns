export const compoundPronouns = {
    "he or she": "",
    "him or her": "",
    "his or her": "",
    "his or hers": "",
    "himself or herself": "",
    "him or herself": "",
    he: "",
    she: ""
};

export const genderPronouns = {
    // She/her/her/hers/herself
    she: "",
    her: "",
    her_poss_adj: "",
    hers: "",
    herself: "",
    // He/him/his/his/himself
    he: "",
    him: "",
    his_poss_adj: "",
    his: "",
    himself: ""
};

// Make a combined dictionary using object spread.
export const allPronouns = { ...compoundPronouns, ...genderPronouns };
