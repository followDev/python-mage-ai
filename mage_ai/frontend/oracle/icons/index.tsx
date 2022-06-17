import BaseIcon, {
  BaseIconProps, CircleStyle, EllipseStyle, PathStyle, RectStyle,
} from './BaseIcon';

function build(arrayOfPathProps, iconProps: {
  fill?: string;
  useStroke?: boolean;
  viewBox?: string;
} = {}) {
  return ({
    ...props
  }: BaseIconProps) => (
    <BaseIcon
      {...props}
      {...iconProps}
    >
      {arrayOfPathProps.map(({
        Style,
        ...pathProps
      }, idx) => Style ? (
        <Style
          useStroke={iconProps?.useStroke}
          {...props}
          {...pathProps}
          key={idx}
        />
      ) : (
        <PathStyle
          useStroke={iconProps?.useStroke}
          {...props}
          {...pathProps}
          key={idx}
        />
      ))}
    </BaseIcon>
  );
}

export const AlertCircle = build([{
  clipRule: 'evenodd',
  d: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Action = build([{
  clipRule: 'evenodd',
  d: 'M6.00008 2.02322L1.90857 4.96911l4.09151 2.4549 4.09152-2.4549-4.09152-2.94589zm-.52588-.8536c.31411-.22616.73764-.22616 1.05175 0l4.27325 3.07671c.5248.37786.4917 1.1694-.0629 1.50212L6.46312 8.31237a.89999.89999 0 01-.92609 0L1.26382 5.74845C.70929 5.41573.67619 4.62419 1.201 4.24633l4.2732-3.07671zM.57133 7.14986c.14207-.23679.4492-.31357.68599-.1715l4.74276 2.84565 4.74272-2.84565c.2368-.14207.5439-.06529.686.1715s.0653.54392-.1715.68599L6.46312 10.7124c-.28501.171-.64108.171-.92609 0L.74283 7.83585c-.2368-.14207-.31357-.4492-.1715-.68599z',
  fillRule: 'evenodd',
}, {
  viewBox: '0 0 12 12',
}]);

export const ArrowUp = build([{
  d: 'M5.20096 2.25c.57735-1 2.02073-1 2.59808 0l2.59806 4.5c.5774 1-.1443 2.25-1.29902 2.25H3.90192c-1.1547 0-1.87638-1.25-1.29903-2.25l2.59807-4.5z',
}], {
  viewBox: '0 0 12 12',
});

export const ArrowDown = build([{
  d: 'M4.70096 9.75c.57735 1 2.02073 1 2.59808 0l2.59807-4.5C10.4745 4.25 9.75278 3 8.59808 3H3.40192c-1.1547 0-1.87638 1.25-1.29903 2.25l2.59807 4.5z',
}], {
  viewBox: '0 0 12 12',
});

export const ArrowRight = build([{
  d: 'M9.75 7.29904c1-.57735 1-2.02073 0-2.59808l-4.5-2.59807C4.25 1.52554 3 2.24722 3 3.40192v5.19616c0 1.1547 1.25 1.87642 2.25 1.29903l4.5-2.59807z',
}], {
  viewBox: '0 0 12 12',
});

export const Check = build([{
  clipRule: 'evenodd',
  d: 'M17.256 4.66058C17.5814 4.98602 17.5814 5.51366 17.256 5.83909L8.45396 14.6411C7.9658 15.1292 7.17435 15.1292 6.68619 14.6411L2.74408 10.699C2.41864 10.3735 2.41864 9.8459 2.74408 9.52046C3.06951 9.19503 3.59715 9.19503 3.92259 9.52046L7.57007 13.1679L16.0774 4.66058C16.4029 4.33514 16.9305 4.33514 17.256 4.66058Z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 20 20',
});

export const Close = build([{
  clipRule: 'evenodd',
  d: 'M.77075.77075c-.361.36099-.361.94628 0 1.30728l3.92198 3.92198L.77098 9.92176c-.361.36104-.361.94624 0 1.30724s.94629.361 1.30729 0l3.92174-3.9217 3.92172 3.9217c.36097.361.94627.361 1.30727 0s.361-.9463 0-1.30727L7.3073 6.00001l3.922-3.92195c.3609-.361.3609-.94629 0-1.30729-.361-.361-.9463-.361-1.30733 0L6.00001 4.69273 2.07803.77075c-.361-.361-.94629-.361-1.30728 0z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 12 12',
});

export const Code = build([{
  clipRule: 'evenodd',
  d: 'M12.5238 1.74155c.2343-.28904.6615-.3359.9543-.10467l3.9031 3.08213c.8251.65159.8251 1.89037 0 2.54196l-3.9031 3.08213c-.2928.2312-.72.1844-.9543-.1047-.2342-.289-.1868-.71076.106-.94199l3.9031-3.08213c.1456-.11498.1456-.33359 0-.44858l-3.9031-3.08213c-.2928-.23123-.3402-.65299-.106-.94202zM10.4659.52931c.3314.10963.5194.49472.42.86013L8.20146 11.2575c-.0994.3655-.44859.5728-.77994.4632-.33134-.1096-.51937-.4947-.41996-.8601L9.68599.99246c.0994-.36541.44861-.57277.77991-.46315zM5.47619 1.73856c.23425.28903.18678.71079-.10603.94202L1.46714 5.76271c-.14561.11499-.14561.33359 0 .44858l3.90302 3.08213c.29281.23123.34028.65299.10603.94198-.23425.2891-.66152.3359-.95433.1047L.61885 7.25798c-.82513-.65159-.82513-1.89037 0-2.54196l3.90301-3.08213c.29281-.23123.72008-.18437.95433.10467z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 18 12',
});

export const Column = build([{
  clipRule: 'evenodd',
  d: 'M2.75 1c-.13807 0-.25.11193-.25.25s.11193.25.25.25h.94279c-.04786-.28381-.29478-.5-.5922-.5H2.75zm1.94806.5C4.64615.66288 3.95078 0 3.10059 0H2.75C2.05964 0 1.5.55964 1.5 1.25S2.05964 2.5 2.75 2.5h6.20117c.69036 0 1.25003-.55964 1.25003-1.25S9.64153 0 8.95117 0h-.35058c-.8502 0-1.54557.66288-1.59748 1.5H4.69806zm3.31033 0h.94278c.13807 0 .25-.11193.25-.25s-.11193-.25-.25-.25h-.35058c-.29742 0-.54435.21619-.5922.5zM1.5 3.94118c0-.27615.22386-.5.5-.5h8c.2761 0 .5.22385.5.5 0 .27614-.2239.5-.5.5H8.87802A.49978.49978 0 018.9 4.58824V9.5c0 .27614-.22386.5-.5.5s-.5-.22386-.5-.5V4.58824a.49978.49978 0 01.02198-.14706H6.47802A.49978.49978 0 016.5 4.58824V10.5c0 .2761-.22386.5-.5.5s-.5-.2239-.5-.5V4.58824a.49978.49978 0 01.02198-.14706H4.07802A.49978.49978 0 014.1 4.58824V11.5c0 .2761-.22386.5-.5.5s-.5-.2239-.5-.5V4.58824a.49978.49978 0 01.02198-.14706H2c-.27614 0-.5-.22386-.5-.5z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 12 12',
});

export const Copy = build([{
  clipRule: 'evenodd',
  d: 'M7.36865 4.00598C7.36865 3.4537 7.81637 3.00598 8.36865 3.00598H19.9942C20.5465 3.00598 20.9942 3.4537 20.9942 4.00598V15.6316C20.9942 16.1838 20.5465 16.6316 19.9942 16.6316H8.36865C7.81637 16.6316 7.36865 16.1838 7.36865 15.6316V4.00598ZM9.36865 14.6316V5.00598H18.9942V14.6316H9.36865Z',
  fillRule: 'evenodd',
}, {
  d: 'M5 8.58557C5 8.03329 4.55228 7.58557 4 7.58557C3.44772 7.58557 3 8.03329 3 8.58557V19.5C3 20.3284 3.67157 21 4.5 21H15.4144C15.9667 21 16.4144 20.5523 16.4144 20C16.4144 19.4477 15.9667 19 15.4144 19H5V8.58557Z',
}], {
  viewBox: '0 0 24 24',
});

export const Cursor = build([{
  clipRule: 'evenodd',
  d: 'M5.1141.6402c-.3759-.402-.92-.482-1.3622-.2924C3.3102.537 3 .978 3 1.5122v11.7305c0 .5149.2966.9505.7246 1.1466.445.204.9872.1281 1.376-.2608l1.5635-1.6178 1.0173 2.4761.0043.0097c.2549.5734.9699.951 1.6407.6567l1.3362-.5727.0092-.004c.6344-.282.8937-1.0248.6331-1.6319l-1.0832-2.6785h1.7861c1.0994 0 1.6406-1.366.8629-2.1508L5.1141.6402zM4.5 2.1602v10.4314l2.6797-2.7731 1.7896 4.3558c.6494.215.863-.3699.863-.3699L8.1188 9.5028l3.2926-.2367L4.5 2.1601z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 16 16',
});

export const Edit = build([{
  clipRule: 'evenodd',
  d: 'M6.25 2.25L5.89645 1.89645L6.25 2.25ZM2 10.5C1.72386 10.5 1.5 10.7239 1.5 11C1.5 11.2761 1.72386 11.5 2 11.5V10.5ZM11.5 11.5C11.7761 11.5 12 11.2761 12 11C12 10.7239 11.7761 10.5 11.5 10.5V11.5ZM9.25 4.25L9.60355 4.60355L9.25 4.25ZM5.08579 8.41421L4.73223 8.06066L5.08579 8.41421ZM1.5 7.32843V8.8H2.5V7.32843H1.5ZM2.2 9.5H3.67157V8.5H2.2V9.5ZM6.39645 1.39645L5.89645 1.89645L6.60355 2.60355L7.10355 2.10355L6.39645 1.39645ZM9.10355 5.10355L9.60355 4.60355L8.89645 3.89645L8.39645 4.39645L9.10355 5.10355ZM9.10355 4.39645L6.60355 1.89645L5.89645 2.60355L8.39645 5.10355L9.10355 4.39645ZM5.43934 8.76777L9.10355 5.10355L8.39645 4.39645L4.73223 8.06066L5.43934 8.76777ZM5.89645 1.89645L2.23223 5.56066L2.93934 6.26777L6.60355 2.60355L5.89645 1.89645ZM2 11.5H11.5V10.5H2V11.5ZM9.60355 1.39645C8.71793 0.510828 7.28206 0.510829 6.39645 1.39645L7.10355 2.10355C7.59865 1.60846 8.40135 1.60846 8.89645 2.10355L9.60355 1.39645ZM8.89645 2.10355C9.39154 2.59865 9.39154 3.40135 8.89645 3.89645L9.60355 4.60355C10.4892 3.71794 10.4892 2.28207 9.60355 1.39645L8.89645 2.10355ZM3.67157 9.5C4.33461 9.5 4.9705 9.23661 5.43934 8.76777L4.73223 8.06066C4.45093 8.34196 4.0694 8.5 3.67157 8.5V9.5ZM1.5 8.8C1.5 9.1866 1.8134 9.5 2.2 9.5V8.5C2.36569 8.5 2.5 8.63431 2.5 8.8H1.5ZM2.5 7.32843C2.5 6.9306 2.65804 6.54907 2.93934 6.26777L2.23223 5.56066C1.76339 6.0295 1.5 6.66539 1.5 7.32843H2.5Z',
  fillRule: 'evenodd',
}], {
  fill: 'none',
  viewBox: '0 0 12 12',
});

export const File = build([{
  clipRule: 'evenodd',
  d: 'M2.75 1.5C1.92157 1.5 1.25 2.17157 1.25 3V9C1.25 9.82843 1.92157 10.5 2.75 10.5H8.25C9.07843 10.5 9.75 9.82843 9.75 9V5.5H8.5C7.11929 5.5 6 4.38071 6 3V1.5H2.75ZM7 2.26439L9.09588 4.5H8.5C7.67157 4.5 7 3.82843 7 3V2.26439ZM0.25 3C0.25 1.61929 1.36929 0.5 2.75 0.5H6.5C6.6382 0.5 6.77025 0.557204 6.86477 0.658029L10.6148 4.65803C10.7016 4.7507 10.75 4.87297 10.75 5V9C10.75 10.3807 9.63071 11.5 8.25 11.5H2.75C1.36929 11.5 0.25 10.3807 0.25 9V3Z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 12 12',
});

export const Graph = build([{
  d: 'M5 5C5 4.44772 4.55228 4 4 4C3.44772 4 3 4.44772 3 5V18.5C3 19.3284 3.67157 20 4.5 20H20C20.5523 20 21 19.5522 21 19C21 18.4477 20.5523 18 20 18H5V5Z',
}, {
  d: 'M20.7071 7.70711C21.0976 7.31658 21.0976 6.68342 20.7071 6.29289C20.3166 5.90237 19.6834 5.90237 19.2929 6.29289L15 10.5858L13.0607 8.64645C12.4749 8.06066 11.5251 8.06066 10.9393 8.64645L7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L12 10.4142L13.9393 12.3536C14.5251 12.9393 15.4749 12.9393 16.0607 12.3536L20.7071 7.70711Z',
}], {
  viewBox: '0 0 24 24',
});

export const Pipeline = build([{
  clipRule: 'evenodd',
  d: 'M3 .5C1.61929.5.5 1.61929.5 3v2.54545c0 1.12446.80059 2.06192 1.86286 2.27349.18481.92811.92375 1.65648 1.8574 1.82569C4.50456 10.7129 5.47854 11.5 6.63635 11.5h2.36364C10.3807 11.5 11.5 10.3807 11.5 8.99999V6.63635c0-1.15784-.7871-2.13184-1.85544-2.41611-.16923-.93358-.89755-1.67247-1.82561-1.8573C7.60742 1.30063 6.66994.5 5.54546.5H3zm3.76553 1.81824C6.56859 1.83813 6.09651 1.5 5.54546 1.5H3c-.82843 0-1.5.67157-1.5 1.5v2.54545c0 .55103.33811 1.0231.81818 1.22005V4.81824c0-1.38071 1.11929-2.5 2.5-2.5h1.94735zm.5981 1c.55101 0 1.02305.33807 1.22002.81811h-1.9473c-1.38071 0-2.5 1.11929-2.5 2.5v1.94739c-.48007-.19696-.81817-.66902-.81817-1.22005V4.81824c0-.82843.67157-1.5 1.5-1.5h2.54545zm-.72728 1.81811c-.82842 0-1.5.67158-1.5 1.5v2.36364c0 .82842.67158 1.50001 1.5 1.50001h2.36364C9.82841 10.5 10.5 9.82841 10.5 8.99999V6.63635c0-.82842-.67159-1.5-1.50001-1.5H6.63635z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 12 12',
});

export const PreviewHidden = build([{
  clipRule: 'evenodd',
  d: 'M1.96418 2.81396l.00051.00125.00321.00781a2.81935 2.81935 0 00.01513.03575 5.6241 5.6241 0 00.06533.14565c.05928.12768.1499.31274.27269.536.24621.44764.6185 1.04289 1.12255 1.63589 1.01216 1.19077 2.51043 2.32382 4.55653 2.32382 2.04607 0 3.54437-1.13305 4.55657-2.32382.504-.593.8763-1.18825 1.1225-1.63589.1228-.22326.2134-.40832.2727-.536.0296-.0638.0514-.11315.0653-.14565a2.9375 2.9375 0 00.0152-.03575l.0032-.00781.0003-.00077.0001-.0003c.1027-.25619.3935-.38076.6498-.27825.2564.10256.3811.39355.2786.64994l-.4643-.1857c.4643.1857.4642.18589.4641.18611l-.0002.00052-.0006.00139-.0016.00415-.0057.01364a2.96627 2.96627 0 01-.0202.04786 6.41437 6.41437 0 01-.077.17173c-.0677.14576-.1685.35133-.3035.59681-.2694.48986-.6783 1.14462-1.2368 1.80162-.189.22233-.3964.44632-.6225.66501l.6576.65761c.1952.19526.1952.51184 0 .70711-.1953.19526-.5119.19526-.7071 0l-.7117-.71168c-.9142.69041-2.0549 1.23201-3.43477 1.33891v1.01921c0 .27615-.22385.49997-.5.49997-.27614 0-.5-.22382-.5-.49997V8.48092c-1.37986-.1069-2.52055-.6485-3.43477-1.33891l-.71167.71168c-.19527.19526-.51185.19526-.70711 0-.19526-.19527-.19526-.51185 0-.70711l.65761-.65761c-.22614-.21869-.43355-.44268-.62253-.66501-.55845-.657-.9674-1.31176-1.23682-1.80162-.13502-.24548-.23581-.45105-.30348-.59681a6.61544 6.61544 0 01-.077-.17173 3.90814 3.90814 0 01-.02024-.04786l-.00561-.01364-.00168-.00415-.00056-.00139-.00021-.00052c-.00009-.00022-.00017-.00041.46407-.18611l-.46424.1857c-.10255-.25639.02216-.54738.27855-.64994.25622-.10249.547.022.64973.27805l.00001.00002z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 16 12',
});

export const PreviewOpen = build([{
  clipRule: 'evenodd',
  d: 'M3.80186 8.41853C2.685 7.57447 1.87133 6.62097 1.51334 6.16691c.31756-.4896 1.0564-1.52552 2.14323-2.44326C4.76857 2.78465 6.20735 2 7.90819 2c1.70083 0 3.13961.78465 4.25161 1.72364 1.0868.91775 1.8257 1.95367 2.1432 2.44327-.358.45406-1.1716 1.40756-2.2885 2.25162-.961.72626-2.11317 1.34651-3.36953 1.52789.7645-.54373 1.2632-1.43684 1.2632-2.44642 0-1.65685-1.34314-3-3-3-1.65685 0-3 1.34315-3 3 0 .41355.08368.80755.23502 1.166a10.48883 10.48883 0 01-.34133-.24747zM7.90819 1c-2.02067 0-3.68067.93269-4.89679 1.95961C1.79468 3.98704.98474 5.13948.65114 5.65872.431 6.00134.45398 6.4359.7028 6.7539c.37363.47749 1.25923 1.52765 2.49614 2.46243C4.43124 10.1476 6.0596 11 7.90819 11c1.84858 0 3.47691-.8524 4.70921-1.78367 1.2369-.93478 2.1225-1.98494 2.4962-2.46244.2488-.318.2718-.75255.0516-1.09517-.3336-.51924-1.1435-1.67168-2.3602-2.69911C11.5889 1.93269 9.92886 1 7.90819 1z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 16 12',
});

// TODO: Improve this image to be slightly shorter on some ends.
export const Report = build([{
  clipRule: 'evenodd',
  d: 'M4 4.00464C3.44772 4.00464 3 4.45235 3 5.00464C3 5.55692 3.44772 6.00464 4 6.00464H20C20.5523 6.00464 21 5.55692 21 5.00464C21 4.45235 20.5523 4.00464 20 4.00464H4ZM3 12.0046C3 11.4524 3.44772 11.0046 4 11.0046H20C20.5523 11.0046 21 11.4524 21 12.0046C21 12.5569 20.5523 13.0046 20 13.0046H4C3.44772 13.0046 3 12.5569 3 12.0046ZM3 19.0046C3 18.4524 3.44772 18.0046 4 18.0046H20C20.5523 18.0046 21 18.4524 21 19.0046C21 19.5569 20.5523 20.0046 20 20.0046H4C3.44772 20.0046 3 19.5569 3 19.0046Z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Search = build([{
  clipRule: 'evenodd',
  d: 'M12.0509 13.4635C10.7888 14.4283 9.21132 15.0015 7.5 15.0015C3.35786 15.0015 0 11.6436 0 7.50146C0 3.35933 3.35786 0.00146484 7.5 0.00146484C11.6421 0.00146484 15 3.35933 15 7.50146C15 9.21122 14.4279 10.7873 13.4647 12.0489L17.7077 16.292C18.0983 16.6825 18.0983 17.3156 17.7077 17.7062C17.3172 18.0967 16.6841 18.0967 16.2935 17.7062L12.0509 13.4635ZM13 7.50146C13 10.539 10.5376 13.0015 7.5 13.0015C4.46243 13.0015 2 10.539 2 7.50146C2 4.4639 4.46243 2.00146 7.5 2.00146C10.5376 2.00146 13 4.4639 13 7.50146Z',
  fillRule: 'evenodd',
}], {
  viewBox: '-3 -3 24 24',
});

export const Sort = build([{
  clipRule: 'evenodd',
  d: 'M4 4.00464C3.44772 4.00464 3 4.45235 3 5.00464C3 5.55692 3.44772 6.00464 4 6.00464H20C20.5523 6.00464 21 5.55692 21 5.00464C21 4.45235 20.5523 4.00464 20 4.00464H4ZM3 12.0046C3 11.4524 3.44772 11.0046 4 11.0046H20C20.5523 11.0046 21 11.4524 21 12.0046C21 12.5569 20.5523 13.0046 20 13.0046H4C3.44772 13.0046 3 12.5569 3 12.0046ZM3 19.0046C3 18.4524 3.44772 18.0046 4 18.0046H20C20.5523 18.0046 21 18.4524 21 19.0046C21 19.5569 20.5523 20.0046 20 20.0046H4C3.44772 20.0046 3 19.5569 3 19.0046Z',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Category = build([
  {
    d: 'M13.5 4C13.2239 4 13 4.22386 13 4.5V10.5C13 10.7761 13.2239 11 13.5 11H20.5C20.7761 11 21 10.7761 21 10.5V4.5C21 4.22386 20.7761 4 20.5 4H13.5ZM15 6V9H19V6H15Z',
    clipRule: 'evenodd',
    fillRule: 'evenodd',
  },
  {
    d: 'M3 13.5C3 13.2239 3.22386 13 3.5 13H10.5C10.7761 13 11 13.2239 11 13.5V19.5C11 19.7761 10.7761 20 10.5 20H3.5C3.22386 20 3 19.7761 3 19.5V13.5ZM5 18V15H9V18H5Z',
    clipRule: 'evenodd',
    fillRule: 'evenodd',
  },
  {
    d: 'M13 13.5C13 13.2239 13.2239 13 13.5 13H20.5C20.7761 13 21 13.2239 21 13.5V19.5C21 19.7761 20.7761 20 20.5 20H13.5C13.2239 20 13 19.7761 13 19.5V13.5ZM15 18V15H19V18H15Z',
    clipRule: 'evenodd',
    fillRule: 'evenodd',
  },
  {
    d: 'M3 4.5C3 4.22386 3.22386 4 3.5 4H10.5C10.7761 4 11 4.22386 11 4.5V10.5C11 10.7761 10.7761 11 10.5 11H3.5C3.22386 11 3 10.7761 3 10.5V4.5ZM5 9V6H9V9H5Z',
    clipRule: 'evenodd',
    fillRule: 'evenodd',
  },
], {
  fill: 'none',
  viewBox: '0 0 24 24',
});

export const Categories = build([
  {
    d: 'M13.3857 4C13.1096 4 12.8857 4.22386 12.8857 4.5V10.5C12.8857 10.7761 13.1096 11 13.3857 11H20.3857C20.6619 11 20.8857 10.7761 20.8857 10.5V4.5C20.8857 4.22386 20.6619 4 20.3857 4H13.3857Z',
  },
  {
    d: 'M2.88574 13.5C2.88574 13.2239 3.1096 13 3.38574 13H10.3857C10.6619 13 10.8857 13.2239 10.8857 13.5V19.5C10.8857 19.7761 10.6619 20 10.3857 20H3.38574C3.1096 20 2.88574 19.7761 2.88574 19.5V13.5Z',
  },
  {
    d: 'M12.8857 13.5C12.8857 13.2239 13.1096 13 13.3857 13H20.3857C20.6619 13 20.8857 13.2239 20.8857 13.5V19.5C20.8857 19.7761 20.6619 20 20.3857 20H13.3857C13.1096 20 12.8857 19.7761 12.8857 19.5V13.5Z',
  },
  {
    d: 'M2.88574 4.5C2.88574 4.22386 3.1096 4 3.38574 4H10.3857C10.6619 4 10.8857 4.22386 10.8857 4.5V10.5C10.8857 10.7761 10.6619 11 10.3857 11H3.38574C3.1096 11 2.88574 10.7761 2.88574 10.5V4.5Z',
  },
], {
  fill: 'none',
  viewBox: '0 0 24 24',
});

export const CalendarDate = build([{
  d: 'M12.0833 3.33317H11.5V2.1665H10.3333V3.33317H5.66667V2.1665H4.5V3.33317H3.91667C3.26917 3.33317 2.75583 3.85817 2.75583 4.49984L2.75 12.6665C2.75 13.3082 3.26917 13.8332 3.91667 13.8332H12.0833C12.725 13.8332 13.25 13.3082 13.25 12.6665V4.49984C13.25 3.85817 12.725 3.33317 12.0833 3.33317ZM12.0833 12.6665H3.91667V6.83317H12.0833V12.6665ZM12.0833 5.6665H3.91667V4.49984H12.0833V5.6665ZM8 8.58317H10.9167V11.4998H8V8.58317Z',
}], {
  viewBox: '0 0 16 16',
});

export const Email = build([{
  d: 'M8.06994 12.322C7.30194 12.322 6.58594 12.15 5.92194 11.806C5.26594 11.454 4.72994 10.942 4.31394 10.27C3.89794 9.59801 3.68994 8.83401 3.68994 7.97801C3.68994 7.11401 3.90194 6.35001 4.32594 5.68601C4.74994 5.01401 5.28994 4.51001 5.94594 4.17401C6.60994 3.83801 7.32194 3.67001 8.08194 3.67001C9.24994 3.67001 10.2459 4.05401 11.0699 4.82201C11.8939 5.58201 12.3059 6.57801 12.3059 7.81001C12.3059 8.61001 12.1259 9.21001 11.7659 9.61001C11.4139 10.002 10.9819 10.198 10.4699 10.198C9.90994 10.198 9.54994 9.98201 9.38994 9.55001C8.99794 9.98201 8.49394 10.198 7.87794 10.198C7.26194 10.198 6.75794 9.99001 6.36594 9.57401C5.98194 9.15801 5.78994 8.64201 5.78994 8.02601C5.78994 7.41001 5.98594 6.89401 6.37794 6.47801C6.76994 6.06201 7.27794 5.85401 7.90194 5.85401C8.51794 5.85401 9.01394 6.07401 9.38994 6.51401L9.56994 6.09401H10.1699L9.92994 8.51801C9.88994 9.02201 10.0659 9.27401 10.4579 9.27401C10.9779 9.27401 11.2379 8.82201 11.2379 7.91801C11.2379 6.91801 10.9299 6.13001 10.3139 5.55401C9.70594 4.97801 8.96594 4.69001 8.09394 4.69001C7.19794 4.69001 6.41794 4.99001 5.75394 5.59001C5.09794 6.18201 4.76994 6.97801 4.76994 7.97801C4.76994 8.98601 5.09794 9.79401 5.75394 10.402C6.41794 11.002 7.19794 11.302 8.09394 11.302C8.74994 11.302 9.31394 11.138 9.78594 10.81L10.3979 11.542C10.1659 11.766 9.84194 11.954 9.42594 12.106C9.00994 12.25 8.55794 12.322 8.06994 12.322ZM7.07394 8.92601C7.29794 9.15801 7.58994 9.27401 7.94994 9.27401C8.30994 9.27401 8.60194 9.15801 8.82594 8.92601C9.05794 8.68601 9.17394 8.38601 9.17394 8.02601C9.17394 7.66601 9.05794 7.37001 8.82594 7.13801C8.60194 6.89801 8.30994 6.77801 7.94994 6.77801C7.58994 6.77801 7.29794 6.89401 7.07394 7.12601C6.84994 7.35801 6.73794 7.65801 6.73794 8.02601C6.73794 8.39401 6.84994 8.69401 7.07394 8.92601Z',
}], {
  fill: 'none',
  viewBox: '0 0 16 16',
});

export const NumberHash = build([{
  d: 'M2 6H14M2 10H14M7 2L5 14M11 2L9 14',
  useStroke: true,
}], {
  fill: 'none',
  viewBox: '0 0 16 16',
});

export const NumberWithDecimalHash = build([{
  d: 'M2 6H14M2 10H14M7 2L5 14M11 2L9 14',
  useStroke: true,
}, {
  Style: CircleStyle,
  cx: 13.5,
  cy: 13.5,
  r: 0.5,
  fill: 'white',
}], {
  fill: 'none',
  viewBox: '0 0 16 16',
});

export const Phone = build([{
  d: 'M2.5 13.5H2V14H2.5V13.5ZM2.5 11V10.5C2.22386 10.5 2 10.7239 2 11H2.5ZM5 10.5L5.35355 10.1464C5.20137 9.99427 4.96889 9.95654 4.77639 10.0528L5 10.5ZM13.5 2.5H14V2H13.5V2.5ZM6.86825 12.3945L7.09415 12.8406H7.09415L6.86825 12.3945ZM11 2.5V2C10.7239 2 10.5 2.22386 10.5 2.5L11 2.5ZM10.5 5L10.0528 4.77639C9.95654 4.96889 9.99427 5.20137 10.1464 5.35355L10.5 5ZM12.3945 6.86825L12.8406 7.09415V7.09415L12.3945 6.86825ZM3 13.5V11H2V13.5H3ZM2.5 11.5C3.00438 11.5 4.10964 11.5042 5.22361 10.9472L4.77639 10.0528C3.89036 10.4958 2.99562 10.5 2.5 10.5V11.5ZM13 2.5C13 6.28058 10.2234 10.1349 6.64234 11.9485L7.09415 12.8406C10.9373 10.8942 14 6.73395 14 2.5H13ZM6.64234 11.9485C5.31826 12.6191 3.90247 13 2.5 13V14C4.083 14 5.65267 13.5706 7.09415 12.8406L6.64234 11.9485ZM4.64645 10.8536C5.04439 11.2515 6.05469 12.2793 6.51134 12.7447L7.22515 12.0444C6.76964 11.5801 5.75561 10.5485 5.35355 10.1464L4.64645 10.8536ZM13.5 2L11 2V3L13.5 3V2ZM10.5 2.5C10.5 2.99562 10.4958 3.89036 10.0528 4.77639L10.9472 5.22361C11.5042 4.10964 11.5 3.00438 11.5 2.5L10.5 2.5ZM2.5 14C6.73395 14 10.8942 10.9373 12.8406 7.09415L11.9485 6.64234C10.1349 10.2234 6.28058 13 2.5 13L2.5 14ZM12.8406 7.09415C13.5706 5.65267 14 4.083 14 2.5L13 2.5C13 3.90247 12.6191 5.31826 11.9485 6.64234L12.8406 7.09415ZM10.1464 5.35355C10.5485 5.75561 11.5801 6.76964 12.0444 7.22515L12.7447 6.51134C12.2793 6.05469 11.2515 5.04439 10.8536 4.64645L10.1464 5.35355Z',
}], {
  fill: 'none',
  viewBox: '0 0 16 16',
});

export const Alphabet = build([{
  d: 'M10.722 18C10.5049 18 10.3126 17.8599 10.2461 17.6532L9.47227 15.2492C9.40575 15.0425 9.21344 14.9023 8.99632 14.9023H4.57942C4.36236 14.9023 4.17009 15.0424 4.10352 15.249L3.32875 17.6534C3.26218 17.86 3.06991 18 2.85285 18H1.50042C1.15475 18 0.913364 17.6576 1.02947 17.3321L5.30847 5.33327C5.37948 5.13416 5.56803 5.00122 5.77942 5.00122H7.82556C8.03684 5.00122 8.22531 5.13402 8.2964 5.33298L12.5837 17.3318C12.7001 17.6574 12.4587 18 12.1129 18H10.722ZM8.5356 12.339C8.63949 12.6618 8.39875 12.9922 8.05965 12.9922H5.51718C5.178 12.9922 4.93725 12.6617 5.04127 12.3388L6.56729 7.60311C6.59834 7.50674 6.68803 7.44141 6.78929 7.44141C6.89057 7.44141 6.98028 7.50677 7.01131 7.60318L8.5356 12.339Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}, {
  d: 'M21.6186 18.0037C21.3702 18.0037 21.1594 17.8214 21.1246 17.5754C21.0802 17.2617 21.0323 16.9148 21.0179 16.7812C21.0176 16.7779 21.0133 16.7768 21.0116 16.7796C20.7922 17.155 20.0539 17.7793 19.0883 17.9805C18.6156 18.1016 16.9203 18.2656 15.8539 17.5938C15.0375 17.1094 14.7781 16.3745 14.6976 16.0039C14.5218 15.1953 14.6546 14.4102 14.8343 14C15.014 13.5898 15.3382 13.1289 16.0921 12.75C16.6952 12.4469 17.6768 12.2826 18.0921 12.2383C18.4207 12.1916 18.7726 12.1467 19.0973 12.1052C19.5059 12.0531 19.8713 12.0064 20.0921 11.9688C20.5985 11.8824 20.7077 11.8 20.7835 11.6484C20.8675 11.4806 20.8545 11.2245 20.8357 11.0767C20.778 10.7734 20.6409 10.42 20.3537 10.2112C19.9515 9.88672 19.6264 9.84854 19.0901 9.80913C18.764 9.78516 18.0804 9.80913 17.5139 10.2112C17.3853 10.3108 17.2407 10.4512 17.1241 10.6549C17.0137 10.8478 16.826 11 16.6036 10.9999L15.4539 10.9996C15.1637 10.9995 14.9322 10.751 15.0106 10.4716C15.138 10.0172 15.3828 9.57435 15.7157 9.23452C16.1111 8.83099 16.5433 8.55785 17.0895 8.33774C17.6357 8.11763 18.3652 7.99127 19.0908 8.0035C19.8163 8.01573 21.0101 8.09375 21.8892 8.94197C22.8422 9.79688 22.975 11.0391 23.0004 11.7601V17.5037C23.0004 17.7798 22.7765 18.0037 22.5004 18.0037H21.6186ZM20.8706 14.7567V14.6528L20.8695 14.6367L20.8706 14.6476V14.0097C20.8706 13.7068 20.6035 13.4735 20.3035 13.5146C19.5927 13.6121 18.7737 13.7263 18.5961 13.7578C18.5258 13.7703 18.4573 13.7803 18.3875 13.7905C18.1507 13.8252 17.8984 13.8621 17.5062 14.0039C17.1501 14.1326 16.9601 14.3428 16.8888 14.4655C16.8715 14.4953 16.8553 14.5257 16.8404 14.5567C16.7837 14.6748 16.7142 14.9343 16.7601 15.3125C16.8133 15.75 17.1521 16.0182 17.3148 16.0977C17.3225 16.1006 17.3341 16.1063 17.3499 16.114C17.4785 16.1765 17.8814 16.3725 18.6429 16.3359C19.4554 16.2969 20.0492 16.1016 20.5101 15.6367C20.7789 15.3473 20.8596 14.9808 20.8706 14.7567Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Switch = build([{
  Style: RectStyle,
  height: 5,
  rx: 2.5,
  useStroke: true,
  width: 9,
  x: 3.5,
  y: 5.5,
}, {
  Style: CircleStyle,
  cx: 6,
  cy: 8,
  r: 1.5,
}], {
  fill: 'none',
  viewBox: '0 0 16 16',
});

export const IDLetters = build([
  { d: 'M3.17123 12C3.05708 12 3 11.9429 3 11.8286V4.17143C3 4.05714 3.05708 4 3.17123 4H4.18636C4.30867 4 4.36982 4.05714 4.36982 4.17143V11.8286C4.36982 11.9429 4.30867 12 4.18636 12H3.17123Z' },
  { d: 'M6.41997 12C6.30581 12 6.24874 11.9429 6.24874 11.8286V4.17143C6.24874 4.05714 6.30581 4 6.41997 4H8.64593C10.0484 4 11.1247 4.37333 11.8748 5.12C12.6249 5.85905 13 6.81905 13 8C13 9.18095 12.6249 10.1448 11.8748 10.8914C11.1247 11.6305 10.0484 12 8.64593 12H6.41997ZM7.61856 10.8571H8.62146C9.61622 10.8571 10.3623 10.6133 10.8597 10.1257C11.3652 9.63048 11.6179 8.9219 11.6179 8C11.6179 7.0781 11.3652 6.37333 10.8597 5.88571C10.3623 5.39048 9.61622 5.14286 8.62146 5.14286H7.61856V10.8571Z' },
], {
  fill: 'none',
  viewBox: '0 0 16 16',
});

export const MapPin = build([
  { d: 'M8.08333 2C5.82583 2 4 3.82583 4 6.08333C4 9.14583 8.08333 13.6667 8.08333 13.6667C8.08333 13.6667 12.1667 9.14583 12.1667 6.08333C12.1667 3.82583 10.3408 2 8.08333 2ZM5.16667 6.08333C5.16667 4.47333 6.47333 3.16667 8.08333 3.16667C9.69333 3.16667 11 4.47333 11 6.08333C11 7.76333 9.32 10.2775 8.08333 11.8467C6.87 10.2892 5.16667 7.74583 5.16667 6.08333Z' },
  { d: 'M8.08333 7.54167C8.88875 7.54167 9.54167 6.88875 9.54167 6.08333C9.54167 5.27792 8.88875 4.625 8.08333 4.625C7.27792 4.625 6.625 5.27792 6.625 6.08333C6.625 6.88875 7.27792 7.54167 8.08333 7.54167Z' },
], {
  viewBox: '0 0 16 16',
});

export const Insights = build([
  { d: 'M13.9998 5.33337C13.0332 5.33337 12.4932 6.29337 12.7132 7.00671L10.3465 9.38004C10.1465 9.32004 9.85317 9.32004 9.65317 9.38004L7.95317 7.68004C8.17984 6.96671 7.63984 6.00004 6.6665 6.00004C5.69984 6.00004 5.15317 6.96004 5.37984 7.68004L2.33984 10.7134C1.6265 10.4934 0.666504 11.0334 0.666504 12C0.666504 12.7334 1.2665 13.3334 1.99984 13.3334C2.9665 13.3334 3.5065 12.3734 3.2865 11.66L6.31984 8.62004C6.51984 8.68004 6.81317 8.68004 7.01317 8.62004L8.71317 10.32C8.4865 11.0334 9.0265 12 9.99984 12C10.9665 12 11.5132 11.04 11.2865 10.32L13.6598 7.95337C14.3732 8.17337 15.3332 7.63337 15.3332 6.66671C15.3332 5.93337 14.7332 5.33337 13.9998 5.33337Z' },
  { d: 'M10 6L10.6267 4.62L12 4L10.6267 3.38L10 2L9.38667 3.38L8 4L9.38667 4.62L10 6Z' },
  { d: 'M2.33317 7.33333L2.6665 6L3.99984 5.66667L2.6665 5.33333L2.33317 4L1.99984 5.33333L0.666504 5.66667L1.99984 6L2.33317 7.33333Z' },
], {
  fill: 'none',
  viewBox: '0 0 16 16',
});

export const Menu = build([{
  d: 'M4 4.00464C3.44772 4.00464 3 4.45235 3 5.00464C3 5.55692 3.44772 6.00464 4 6.00464H20C20.5523 6.00464 21 5.55692 21 5.00464C21 4.45235 20.5523 4.00464 20 4.00464H4ZM3 12.0046C3 11.4524 3.44772 11.0046 4 11.0046H20C20.5523 11.0046 21 11.4524 21 12.0046C21 12.5569 20.5523 13.0046 20 13.0046H4C3.44772 13.0046 3 12.5569 3 12.0046ZM3 19.0046C3 18.4524 3.44772 18.0046 4 18.0046H20C20.5523 18.0046 21 18.4524 21 19.0046C21 19.5569 20.5523 20.0046 20 20.0046H4C3.44772 20.0046 3 19.5569 3 19.0046Z',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Chat = build([{
  d: 'M3.50016 2C2.67174 2 2.00017 2.67156 2.00016 3.49998L2 13.981C1.99997 15.7913 4.21333 16.6702 5.45521 15.353L6.73081 14H14.5002C15.3286 14 16.0002 13.3284 16.0002 12.5V3.5C16.0002 2.67157 15.3286 2 14.5002 2H3.50016ZM4 13.981L4.00015 4H14.0002V12H6.73081C6.17996 12 5.65349 12.2272 5.2756 12.628L4 13.981Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}, {
  d: 'M8 18.5V16H10V18H16.836C17.2972 18 17.7442 18.1594 18.1014 18.4512L20 20.0025V10H18V8H20.5C21.3284 8 22 8.67157 22 9.5V20.0025C22 21.6891 20.0407 22.6184 18.7346 21.5513L16.836 20H9.5C8.67157 20 8 19.3284 8 18.5Z',
}], {
  fill: 'none',
  viewBox: '0 0 24 24',
});

export const MultiShare = build([{
  d: 'M17.8851 3.00012C16.1647 3.00012 14.77 4.39478 14.77 6.11518C14.77 6.13746 14.7703 6.15969 14.7707 6.18185L8.04548 9.55522C7.51475 9.13562 6.84415 8.88513 6.11506 8.88513C4.39466 8.88513 3 10.2798 3 12.0002C3 13.7206 4.39466 15.1152 6.11506 15.1152C6.92759 15.1152 7.66746 14.8042 8.22206 14.2946L14.7842 17.5861C14.7748 17.6844 14.77 17.7841 14.77 17.8848C14.77 19.6052 16.1647 20.9999 17.8851 20.9999C19.6055 20.9999 21.0001 19.6052 21.0001 17.8848C21.0001 16.1644 19.6055 14.7698 17.8851 14.7698C16.9855 14.7698 16.1749 15.1511 15.6063 15.761L9.18362 12.5394C9.21418 12.3643 9.23011 12.1841 9.23011 12.0002C9.23011 11.7397 9.19813 11.4866 9.13789 11.2448L15.4618 8.07271C16.0329 8.77877 16.9062 9.23024 17.8851 9.23024C19.6055 9.23024 21.0001 7.83558 21.0001 6.11518C21.0001 4.39478 19.6055 3.00012 17.8851 3.00012ZM16.77 6.11518C16.77 5.49935 17.2692 5.00012 17.8851 5.00012C18.5009 5.00012 19.0001 5.49935 19.0001 6.11518C19.0001 6.73101 18.5009 7.23024 17.8851 7.23024C17.2692 7.23024 16.77 6.73101 16.77 6.11518ZM16.77 17.8848C16.77 17.269 17.2692 16.7698 17.8851 16.7698C18.5009 16.7698 19.0001 17.269 19.0001 17.8848C19.0001 18.5007 18.5009 18.9999 17.8851 18.9999C17.2692 18.9999 16.77 18.5007 16.77 17.8848ZM6.11506 10.8851C5.49923 10.8851 5 11.3844 5 12.0002C5 12.616 5.49923 13.1152 6.11506 13.1152C6.73089 13.1152 7.23011 12.616 7.23011 12.0002C7.23011 11.3844 6.73089 10.8851 6.11506 10.8851Z',
  clipRule: 'evenodd',
  fillRule: 'evenodd',
}], {
  viewBox: '0 0 24 24',
});

export const Input = build([
  { d: 'M19.0001 5.00635V18.9938H5.01269V16.0157C5.01269 15.4634 4.56498 15.0157 4.01269 15.0157C3.46041 15.0157 3.01269 15.4634 3.01269 16.0157V19.4938C3.01269 20.3222 3.68426 20.9938 4.51269 20.9938H19.5001C20.3286 20.9938 21.0001 20.3222 21.0001 19.4938V4.50635C21.0001 3.67792 20.3286 3.00635 19.5001 3.00635H4.51269C3.68426 3.00635 3.01269 3.67792 3.01269 4.50635V7.99164C3.01269 8.54392 3.46041 8.99164 4.01269 8.99164C4.56498 8.99164 5.01269 8.54392 5.01269 7.99164V5.00635H19.0001Z' },
  { d: 'M12.8216 12.9645H4.00488C3.4526 12.9645 3.00488 12.5168 3.00488 11.9645C3.00488 11.4122 3.4526 10.9645 4.00488 10.9645H12.7507L11.4865 9.70028C11.0959 9.30976 11.0959 8.6766 11.4864 8.28607C11.8769 7.89554 12.5101 7.89553 12.9006 8.28605L15.5539 10.9393C16.1397 11.5251 16.1398 12.4748 15.554 13.0606L12.9007 15.7139C12.5101 16.1044 11.877 16.1044 11.4864 15.7139C11.0959 15.3234 11.0959 14.6902 11.4864 14.2997L12.8216 12.9645Z' },
], {
  fill: 'none',
  viewBox: '0 0 24 24',
});
