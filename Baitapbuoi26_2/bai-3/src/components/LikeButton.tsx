type LikeButtonProps = {
  likes: number;
  onLike: () => void;
};

export function LikeButton({ likes, onLike }: LikeButtonProps) {
  return (
    <button onClick={onLike} style={{ padding: "8px 16px", cursor: "pointer" }}>
      Thích ({likes})
    </button>
  );
}