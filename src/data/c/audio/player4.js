const url = "https://s3.eu-central-1.amazonaws.com/sonny.account/songs/"

const songs = [
    {
        name: "Bobby Caldwell - What You Won't Do For Love",
        source: `${url}bobby_caldwell_-_what_you_wont_do_for_love.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Daft Punk - The Game of Love",
        source: `${url}daft_punk_-_the_game_of_love.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Alessia Cara - I'm Like A Bird",
        source: `${url}alessia_cara_-_im_like_a_bird.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Anderson East - Always Be My Baby",
        source: `${url}anderson_east_-_always_be_my_baby.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Anitta - Thank U, Next",
        source: `${url}anitta_-_thank_u_next.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Anna Of The North - Nothing Compares 2 U",
        source: `${url}anna_of_the_north_-_nothing_compares_2_u.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Awolnation - I'm on Fire",
        source: `${url}awolnation_-_im_on_fire.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Big Yellow Taxi - Rita Ora",
        source: `${url}big_yellow_taxi_-_rita_ora.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Childish Gambino - Redbone",
        source: `${url}childish_gambino_-_redbone.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Сhvrches - Stay",
        source: `${url}chvrches_-_stay.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Connor Duermit - Your Lips Are Mine",
        source: `${url}connor_duermit_-_your_lips_are_mine.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Ed Sheeran - Hit Me Baby One More Time",
        source: `${url}ed_sheeran_-_hit_me_baby_one_more_time.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Ella Vos - Million",
        source: `${url}ella_vos_-_million.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Ellie Goulding - Your Song",
        source: `${url}ellie_goulding_-_your_song.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Fools Garden - Lemon Tree",
        source: `${url}fools_garden_-_lemon_tree.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Friedberg - Forever Young",
        source: `${url}friedberg_-_forever_young.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Gregory Alan Isakov - San Luis",
        source: `${url}gregory_alan_isakov_-_san_luis.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Alec Benjamin - Stan",
        source: `${url}alec_benjamin_-_stan.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Grover Washington Jr. - Just the Two of Us",
        source: `${url}grover_washington_jr_-_just_the_two_of_us.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Guordan Banks - Yesterday",
        source: `${url}guordan_banks_-_yesterday.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "HAIM - That Don’t Impress Me Much",
        source: `${url}haim_-_that_dont_impress_me_much.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Händel - Water Music suite no. 2 in D major Alla Hornpipe",
        source: `${url}handel_-_water_music_suite_no_2.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Harry Styles - Girl Crush",
        source: `${url}harry_styles_-_girl_crush.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Henry Green - Electric Feel",
        source: `${url}henry_green_-_electric_feel.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Hozier - Say my name",
        source: `${url}hozier_-_say_my_name.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "I'm With Her - Hannah Hunt",
        source: `${url}im_with_her_-_hannah_hunt.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Imaginary Future - Wild World",
        source: `${url}imaginary_future_-_wild_world.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Iron & Wine - Time After Time",
        source: `${url}iron_and_wine_-_time_after_time.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Isaac Gracie - You Only Live Once",
        source: `${url}isaac_gracie_-_you_only_live_once.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Jack Johnson - Imagine",
        source: `${url}jack_johnson_-_imagine.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "James TW - U Remind Me",
        source: `${url}james_tw_-_u_remind_me.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Jilian Linklater - A Million Dreams",
        source: `${url}jilian_linklater_-_a_million_dreams.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Jillian Jacqueline - I Feel It Coming",
        source: `${url}jillian_jacqueline_-_i_feel_it_coming.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "John Prine - I Just Called To Say I Love You",
        source: `${url}john_prine_-_i_just_called_to_say_i_love_you.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Kari Jobe - In The name Of Love",
        source: `${url}kari_jobe_-_in_the_name_of_love.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "KATIE - Beautiful Surprise",
        source: `${url}katie_-_beautiful_surprise.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Katie Melua - Wonderful Life",
        source: `${url}katie_melua_-_wonderful_life.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Kelsea Ballerini - Lost In Japan",
        source: `${url}kelsea_ballerini_-_lost_in_japan.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Lauren Daigle - Don't Dream It's Over",
        source: `${url}lauren_daigle_-_dont_dream_its_over.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Maisie Peters Lyrics - I'll Be There For You",
        source: `${url}maisie_peters_lyrics_-_ill_be_there_for_you.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Mandolin Orange - Amsterdam",
        source: `${url}mandolin_orange_-_amsterdam.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Meghan Trainor - Normal",
        source: `${url}meghan_trainor_-_normal.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Miley Cyrus - Wildflowers",
        source: `${url}miley_cyrus_-_wildflowers.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Missy & Blonde Julia Ross - Swalla",
        source: `${url}missy_and_blonde_julia_ross_-_swalla.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Nina Nesbitt - Cry Me A River",
        source: `${url}nina_nesbitt_-_cry_me_a_river.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Norah Jones - Don't Be Denied",
        source: `${url}norah_jones_-_dont_be_denied.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Norah Jones - Unchained Melody",
        source: `${url}norah_jones_-_unchained_melody.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Obadiah Parker - Hey Ya",
        source: `${url}obadiah_parker_-_hey_ya.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Okay Kaya - Believe",
        source: `${url}okay_kaya_-_believe.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Okean Elzy - На небі",
        source: `${url}okean_elzy_-_на_небі.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Old Sea Brigade - We Belong",
        source: `${url}old_sea_brigade_-_we_belong.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Only Hope - A Walk To Remember",
        source: `${url}only_hope_-_a_walk_to_remember.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Overcoats - Fix You",
        source: `${url}overcoats_-_fix_you.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Sofia Karlberg - Paris",
        source: `${url}paris_-_acoustic_version.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Pete Belasco - All I Want",
        source: `${url}pete_belasco_-_all_i_want.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Phil Wickham - What a Wonderful World",
        source: `${url}phil_wickham_-_what_a_wonderful_world.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Phoebe Bridgers - Friday Im In Love",
        source: `${url}phoebe_bridgers_-_friday_im_in_love.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Pomplamoose - Jamiroquai Bee Gees Mashup",
        source: `${url}pomplamoose_-_jamiroquai_bee_gees_mashup.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Pomplamoose - Something About Us",
        source: `${url}pomplamoose_-_something_about_us.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Porcelain Heart - Slide",
        source: `${url}porcelain_heart_-_slide.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Q. Z. B. - There's Nothing Holdin Me Back",
        source: `${url}qzb_-_theres_nothing_holdin_me_back.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Rayland Baxter - Strangers",
        source: `${url}rayland_baxter_-_strangers.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Russell Dickerson - Man in the Mirror",
        source: `${url}russell_dickerson_-_man_in_the_mirror.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Sam Smith - Get Here",
        source: `${url}sam_smith_-_get_here.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Sarah McLachlan - Angel",
        source: `${url}sarah_mclachlan_-_angel.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Sean Angus Watson - It Ain't Weird",
        source: `${url}sean_angus_watson_-_it_aint_weird.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Sean Watson & Gabe Fleck - I Want You Back / Let's Get It On",
        source: `${url}sean_watson_and_gabe_fleck_-_i_want_you_back_lets_get_it_on.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Sleeping At Last - As Long As You Love Me",
        source: `${url}sleeping_at_last_-_as_long_as_you_love_me.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "The Japanese House - Landslide",
        source: `${url}the_japanese_house_-_landslide.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "The Main Squeeze - Man In The Mirror",
        source: `${url}the_main_squeeze_-_man_in_the_mirror.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Thomas Daniel - Scared To Be Lonely",
        source: `${url}thomas_daniel_-_scared_to_be_lonely.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Maggie Rogers - Tim McGraw",
        source: `${url}maggie_rogers_-_tim_mcgraw.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Tiz McNamara – Falling Asleep",
        source: `${url}tiz_mcnamara_–_falling_asleep.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Tom Speight - I Wanna Dance with Somebody (Who Loves Me)",
        source: `${url}tom_speight_-_i_wanna_dance_with_somebody.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Tom Speight - Stand By Me",
        source: `${url}tom_speight_-_stand_by_me.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Tony Bennett - I've Got The World on a String",
        source: `${url}tony_bennett_-_ive_got_the_world_on_a_string.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "William Fitzsimmons - I Kissed A Girl",
        source: `${url}william_fitzsimmons_-_i_kissed_a_girl.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Yo-Yo Ma - Shape of You",
        source: `${url}yo-yo_ma_-_shape_of_you.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Yoke Lore - Truly Madly Deeply",
        source: `${url}yoke_lore_-_truly_madly_deeply.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Agnes Obel - Riverside",
        source: `${url}agnes_obel_-_riverside.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Alyssa Baker - Can't Help Falling In Love",
        source: `${url}alyssa_baker_-_cant_help_falling_in_love.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Bebel Gilberto - August Day Song",
        source: `${url}bebel_gilberto_-_august_day_song.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Ben Webster - Blue Light",
        source: `${url}ben_webster_-_blue_light.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Corey Heuvel - Crazy",
        source: `${url}corey_heuvel_-_crazy.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Elia Bloomze - Тебе це може вбити",
        source: `${url}elia_bloomze_-_tebt_tse_moje_vbiti.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Golan - Rocket Love",
        source: `${url}golan_-_rocket_love.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "José González - Let It Carry You",
        source: `${url}jose_gonzalez_-_let_it_carry_you.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Joy Bloom - Не питай",
        source: `${url}joy_bloom_-_ne_pitai.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Katrina Gomez - Hey Jude",
        source: `${url}katrina_gomez_-_hey_jude.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Keiko Matsui - Moving On",
        source: `${url}keiko_matsui_-_moving_on.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Lara Fabian - Review My Kisses",
        source: `${url}lara_fabian_-_review_my_kisses.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Latin Bossa Connection - Night At Favela",
        source: `${url}latin_bossa_connection_-_night_at_favela.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Lemon Jelly - His Majesty King Raam",
        source: `${url}lemon_jelly_-_his_majesty_king_raam.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Lotte Kestner - Enjoy the Silence",
        source: `${url}lotte_kestner_-_enjoy_the_silence.mp3`,
        id: Math.random(),
        tags: ['night']
    },
    {
        name: "Marga Sol - Paris du Soleil",
        source: `${url}marga_sol_-_paris_du_soleil.mp3`,
        id: Math.random(),
        tags: ['day']
    },
    {
        name: "Tori Amos - A Sorta Fairytale",
        source: `${url}tori_amos_-_a_sorta_fairytale.mp3`,
        id: Math.random(),
        tags: ['day']
    },
]

export default songs